import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
// import { ref, onUnmounted } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyBjZ7EQH_aF5zyiAxlNXmCdI4CX3BHP00c",
  authDomain: "save-my-world.firebaseapp.com",
  projectId: "save-my-world",
  storageBucket: "save-my-world.appspot.com",
  messagingSenderId: "476672491521",
  appId: "1:476672491521:web:a52848f9fabcc4dfa70000",
  measurementId: "G-N1PGFXLHL7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export const getQuizzes = async () => {
  const q = query(collection(db, 'quizzes'));
  let quizzes = []
  const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let quiz = {
            ...doc.data()
        }
        quiz.id = doc.id
        quizzes.push(quiz)
    })

  return quizzes;
};

// Collection to retrieve the countries lat and long without having to call the api

// Additionals if you want analytics

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBjZ7EQH_aF5zyiAxlNXmCdI4CX3BHP00c",
//   authDomain: "save-my-world.firebaseapp.com",
//   projectId: "save-my-world",
//   storageBucket: "save-my-world.appspot.com",
//   messagingSenderId: "476672491521",
//   appId: "1:476672491521:web:a52848f9fabcc4dfa70000",
//   measurementId: "G-N1PGFXLHL7"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
