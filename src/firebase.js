import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmrqJ4wLCBShqzrf02jXF1VcLeEXIjDHY",
  authDomain: "chattick-dc58d.firebaseapp.com",
  projectId: "chattick-dc58d",
  storageBucket: "chattick-dc58d.appspot.com",
  messagingSenderId: "417994240108",
  appId: "1:417994240108:web:dfcaf07cdbf7931f0a2849"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }