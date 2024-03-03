importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyBuZb6cjTt9_XTpN3ToaPAKXkaIbYf5TRA",
    authDomain: "push-notifications-ea250.firebaseapp.com",
    projectId: "push-notifications-ea250",
    storageBucket: "push-notifications-ea250.appspot.com",
    messagingSenderId: "17017552123",
    appId: "1:17017552123:web:4a1fd82e0030dbb366845e",
    measurementId: "G-E5YF3KS2KD"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});