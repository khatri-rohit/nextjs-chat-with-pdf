import { App, cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceKey from "./service_key.json"; 

let app:App;

if(getApps().length === 0) {
    app = initializeApp({
        credential: cert(serviceKey),
    });
} else {
    app = getApps()[0];
}

const adminDb = getFirestore(app);

export { adminDb, app as adminApp };