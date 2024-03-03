import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBuZb6cjTt9_XTpN3ToaPAKXkaIbYf5TRA",
    authDomain: "push-notifications-ea250.firebaseapp.com",
    projectId: "push-notifications-ea250",
    storageBucket: "push-notifications-ea250.appspot.com",
    messagingSenderId: "17017552123",
    appId: "1:17017552123:web:4a1fd82e0030dbb366845e",
    measurementId: "G-E5YF3KS2KD"
  };
  
 
 export const app = initializeApp(firebaseConfig);
 export const messaging = getMessaging(app);