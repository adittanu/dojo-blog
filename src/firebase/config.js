import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDvunesMxZbq5L7v0TAgbEjmDChWfjk6i4",
    authDomain: "udemy-vue-firebase-sites-4e37f.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-4e37f",
    storageBucket: "udemy-vue-firebase-sites-4e37f.appspot.com",
    messagingSenderId: "1001744063971",
    appId: "1:1001744063971:web:b2694e5b28ef97552354d6",
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }
