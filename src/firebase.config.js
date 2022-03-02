import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA-p4HfCNIgxkpfNGZf7beFXZ_0PMUeSLI',
  authDomain: 'pirate-crew-60f6c.firebaseapp.com',
  projectId: 'pirate-crew-60f6c',
  storageBucket: 'pirate-crew-60f6c.appspot.com',
  messagingSenderId: '338241054535',
  appId: '1:338241054535:web:4d3694e4ca70c6d1730e62',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
