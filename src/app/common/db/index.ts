import admin from "firebase-admin";
import serviceAccount from "../../../../serviceAccountKey.json";
import { ServiceAccount } from "firebase-admin";

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount),
    });
  } catch (error: any) {
    console.log("Firebase admin initialization error", error.stack);
  }
}
export default admin.firestore();
