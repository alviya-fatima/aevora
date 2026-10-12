import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpdznQ1OjPmftKc0jF9PX6e39aTGzx7x4",
  authDomain: "aveora-d18d0.firebaseapp.com",
  projectId: "aveora-d18d0",
  storageBucket: "aveora-d18d0.firebasestorage.app",
  messagingSenderId: "492486121461",
  appId: "1:492486121461:web:66ecfc726b97bc8efdf2bc",
  measurementId: "G-NVS7RCSBD4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Firebase persistence error:", error);
});
