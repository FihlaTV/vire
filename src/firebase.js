import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBZ5BS2i3AEyYvcIC3QdjaVHavuFNGwo34",
    authDomain: "vire-82fb6.firebaseapp.com",
    databaseURL: "https://vire-82fb6.firebaseio.com",
    projectId: "vire-82fb6",
    storageBucket: "vire-82fb6.appspot.com",
    messagingSenderId: "432579772140",
    appId: "1:432579772140:web:c7342e5e38634e825dafc9"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
