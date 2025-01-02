
/**
 * Firebase Configuration Module
 *
 * This module initializes and configures Firebase using environment variables. It provides a Firebase app instance
 * that can be used throughout your application for various Firebase services.
 *
 * @module FirebaseConfig
 * @version 2.0.0
 */

import 'dotenv/config';
import { getApps, initializeApp } from 'firebase/app';

/**
 * Firebase configuration object that stores API keys and other credentials from environment variables.
 * @type {Object}
 */
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

/**
 * Initialize a Firebase app using the provided configuration.
 * If an app instance already exists, it reuses that instance.
 * @type {FirebaseApp}
 */
let app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

/**
 * Export the initialized Firebase app instance.
 * @type {FirebaseApp}
 */
export default app;


// database import command
// npx -p node-firestore-import-export firestore-export -a appConfig.json -b backup.json