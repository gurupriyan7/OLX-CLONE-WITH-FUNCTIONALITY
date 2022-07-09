import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.API_KEY,

          apiKey: "AIzaSyDK4RXhoDU7C1QGxIrv_CrZh_yVLKFDSIU",
          authDomain: "olx-clone-f6c5e.firebaseapp.com",
          projectId: "olx-clone-f6c5e",
          storageBucket: "olx-clone-f6c5e.appspot.com",
          messagingSenderId: "709687123752",
          appId: "1:709687123752:web:2ddecbe2253aeebb5bba1d",
          measurementId: "G-F30J4BC52D"
        };
  
        export default firebase.initializeApp(firebaseConfig)