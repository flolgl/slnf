
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCaMoglTtOR3JPnIcsr0FwAk1OOuKHxgsk",
    authDomain: "slnf-78521.firebaseapp.com",
    projectId: "slnf-78521",
    storageBucket: "slnf-78521.appspot.com",
    messagingSenderId: "540299659797",
    appId: "1:540299659797:web:d1719e150e7714fc3b9c1c"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;