import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Server-only. Uses a Firebase service account (Project Settings > Service
// Accounts > Generate new private key). NEVER expose these values to the
// browser or commit them to git — they belong in .env.local only.
//
// Initialization is lazy (only happens the first time adminAuth/adminDb is
// actually used) so that `npm run build` and pages that don't need auth
// still work before you've set up Firebase credentials.
let _app;

function getAdminApp() {
  if (_app) return _app;
  if (getApps().length) {
    _app = getApps()[0];
    return _app;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  // Private keys from .env files often have literal "\n" instead of real
  // newlines — this restores them.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY in .env.local — see .env.local.example."
    );
  }

  _app = initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
  });
  return _app;
}

// Proxied so that `adminAuth.verifySessionCookie(...)` etc. only triggers
// initialization (and the credential check above) on first real use.
export const adminAuth = new Proxy(
  {},
  {
    get(_target, prop) {
      const auth = getAuth(getAdminApp());
      return auth[prop].bind(auth);
    },
  }
);

export const adminDb = new Proxy(
  {},
  {
    get(_target, prop) {
      const db = getFirestore(getAdminApp());
      return db[prop].bind(db);
    },
  }
);
