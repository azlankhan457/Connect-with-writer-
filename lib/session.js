import { cookies } from "next/headers";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import { randomUUID } from "crypto";

const SESSION_COOKIE_NAME = "session";
const DEVICE_ID_COOKIE_NAME = "device_id";
// 14 days in milliseconds (Firebase's actual maximum for session cookies)
const SESSION_MAX_AGE_MS = 14 * 24 * 60 * 60 * 1000;
// ~400 days for device cookie (practical browser max)
const DEVICE_MAX_AGE_MS = 400 * 24 * 60 * 60 * 1000;

/**
 * Exchanges a Firebase ID token (from the client SDK) for a long-lived
 * session cookie and sets it as an httpOnly cookie on the response.
 * This is Firebase's officially documented pattern for SSR session
 * management — see https://firebase.google.com/docs/auth/admin/manage-cookies
 */
export async function createSessionCookie(idToken) {
  const sessionCookie = await adminAuth.createSessionCookie(idToken, {
    expiresIn: SESSION_MAX_AGE_MS,
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE_NAME, sessionCookie, {
    maxAge: SESSION_MAX_AGE_MS / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });
}

export async function clearSessionCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE_NAME);
}

/**
 * Generate a new device ID and store it in a cookie and Firestore.
 * Called after successful OTP verification or Google sign-in.
 */
export async function setTrustedDevice(uid) {
  const deviceId = randomUUID();
  const timestamp = Date.now();

  console.log(
    `[setTrustedDevice] Setting device for uid=${uid}, deviceId=${deviceId}`,
  );

  // Set the device_id cookie
  const cookieStore = await cookies();
  cookieStore.set(DEVICE_ID_COOKIE_NAME, deviceId, {
    maxAge: DEVICE_MAX_AGE_MS / 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
  });

  console.log(
    `[setTrustedDevice] Cookie set for maxAge=${DEVICE_MAX_AGE_MS / 1000}s`,
  );

  // Store in Firestore
  try {
    await adminDb
      .collection("users")
      .doc(uid)
      .collection("trustedDevices")
      .doc(deviceId)
      .set({
        createdAt: timestamp,
        lastUsedAt: timestamp,
      });
    console.log(`[setTrustedDevice] Firestore doc created`);
  } catch (err) {
    console.error("Failed to store trusted device:", err);
    // Don't fail the auth flow if Firestore write fails
  }

  return deviceId;
}

/**
 * Check if a device is trusted for a given user.
 * Returns true if the device_id cookie exists AND matches a doc in trustedDevices.
 */
export async function isTrustedDevice(uid) {
  let deviceId = null;

  // Read from server-side cookies (the most reliable method in API routes)
  const cookieStore = await cookies();
  deviceId = cookieStore.get(DEVICE_ID_COOKIE_NAME)?.value;

  console.log(
    `[isTrustedDevice] deviceId cookie: ${deviceId ? "found" : "not found"}`,
  );

  if (!deviceId) return false;

  try {
    const doc = await adminDb
      .collection("users")
      .doc(uid)
      .collection("trustedDevices")
      .doc(deviceId)
      .get();

    console.log(`[isTrustedDevice] Firestore doc exists: ${doc.exists}`);
    return doc.exists;
  } catch (err) {
    console.error("Failed to check trusted device:", err);
    return false;
  }
}

/**
 * Update the lastUsedAt timestamp for a trusted device.
 */
export async function updateTrustedDeviceTimestamp(uid) {
  const cookieStore = await cookies();
  const deviceId = cookieStore.get(DEVICE_ID_COOKIE_NAME)?.value;

  if (!deviceId) return;

  try {
    await adminDb
      .collection("users")
      .doc(uid)
      .collection("trustedDevices")
      .doc(deviceId)
      .update({
        lastUsedAt: Date.now(),
      });
  } catch (err) {
    console.error("Failed to update trusted device timestamp:", err);
  }
}

/**
 * Reads and verifies the session cookie on the server. Returns the decoded
 * Firebase user claims, or null if there's no valid session.
 */
export async function getSessionUser(request) {
  let sessionCookie = null;

  if (request?.cookies?.get) {
    sessionCookie = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  }

  if (!sessionCookie) {
    const cookieStore = await cookies();
    sessionCookie = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  }

  if (!sessionCookie) return null;

  try {
    return await adminAuth.verifySessionCookie(sessionCookie, true);
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME, DEVICE_ID_COOKIE_NAME };
