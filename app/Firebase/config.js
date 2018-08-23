import * as firebase from 'firebase';
import * as constant from "./constants"

// Initialize Firebase
const config = {
    apiKey: constant.FIREBASE_API_KEY,
    authDomain: constant.FIREBASE_AUTH_DOMAIN,
    databaseURL: constant.FIREBASE_DATABASE_URL,
    projectId: constant.FIREBASE_PROJECT_ID,
    storageBucket: constant.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: constant.FIREBASE_MESSAGING_SENDER_ID
};


    firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();