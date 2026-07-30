import { cookies } from "next/headers";
import { adminAuth } from "@/lib/firebase/admin";

const SESSION_COOKIE_NAME = "session";
const SESSION_MAX_AGE_MS = 5 * 24 * 60 * 60 * 1000; // 5 days

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

export { SESSION_COOKIE_NAME };
