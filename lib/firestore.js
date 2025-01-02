/**
 * Firestore Configuration Module
 *
 * This module initializes and configures Firestore using a Firebase app instance obtained from the FirebaseConfig module.
 * It provides a Firestore database instance that can be used throughout your application to interact with Firestore.
 *
 * @module FirestoreConfig
 * @version 2.0.0
 */

import { Firestore, getFirestore } from "firebase/firestore";
import app from "@/lib/firebaseConfig";

/**
 * Initialize a Firestore database instance using the Firebase app instance.
 * @type {Firestore}
 */
const db = getFirestore(app);

/**
 * Export the initialized Firestore database instance.
 * @type {Firestore}
 */
export default db;
