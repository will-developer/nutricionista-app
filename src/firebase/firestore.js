// src/firebase/firestore.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './config'; // Importando as configurações

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = getFirestore(app);

export { db };
