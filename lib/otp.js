const OTP_TTL_MS = 10 * 60 * 1000; // 10 minutes
const MAX_ATTEMPTS = 5;

function generateCode() {
  return String(Math.floor(100000 + Math.random() * 900000)); // 6 digits
}

/**
 * Creates a fresh OTP for the given email + purpose, overwriting any
 * previous unexpired one, and returns the plaintext code to send.
 */
export async function createOtp(email, purpose) {
  const { adminDb } = await import("@/lib/firebase/admin");

  const code = generateCode();
  const docId = `${email.toLowerCase()}_${purpose}`;

  await adminDb
    .collection("otps")
    .doc(docId)
    .set({
      email: email.toLowerCase(),
      purpose,
      code,
      attempts: 0,
      createdAt: Date.now(),
      expiresAt: Date.now() + OTP_TTL_MS,
    });

  return code;
}

/**
 * Verifies a submitted OTP code. Returns { valid: boolean, reason?: string }.
 * Deletes the code once it's used successfully so it can't be replayed.
 */
export async function verifyOtp(email, purpose, submittedCode) {
  const { adminDb } = await import("@/lib/firebase/admin");

  const docId = `${email.toLowerCase()}_${purpose}`;
  const ref = adminDb.collection("otps").doc(docId);
  const snap = await ref.get();

  if (!snap.exists) {
    return { valid: false, reason: "No code found for this request. Please request a new one." };
  }

  const data = snap.data();

  if (Date.now() > data.expiresAt) {
    await ref.delete();
    return { valid: false, reason: "This code has expired. Please request a new one." };
  }

  if (data.attempts >= MAX_ATTEMPTS) {
    await ref.delete();
    return { valid: false, reason: "Too many incorrect attempts. Please request a new code." };
  }

  if (data.code !== submittedCode) {
    await ref.update({ attempts: data.attempts + 1 });
    return { valid: false, reason: "Incorrect code. Please try again." };
  }

  await ref.delete();
  return { valid: true };
}
