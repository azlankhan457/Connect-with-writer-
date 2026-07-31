"use client";

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// All values here are PUBLIC (safe to expose in the browser) — that's why
// they're read from NEXT_PUBLIC_* env vars. Fill these in with the values
// from your Firebase project's web app config (Project Settings > General
// > Your apps > SDK setup and configuration).
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:
    process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "connectwithwriter.com",
  projectId:
    process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "connectwithwriter-cww",
  storageBucket:
    process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
    "connectwithwriter-cww.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "",
};

// Next.js hot-reloads modules in dev, so guard against re-initializing.
export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
