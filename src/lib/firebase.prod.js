import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCU3Jrowkrl8rCMcvLjwipuCWLp1oTyyWo',
  authDomain: 'netflix-95701.firebaseapp.com',
  projectId: 'netflix-95701',
  storageBucket: 'netflix-95701.appspot.com',
  messagingSenderId: '344590120751',
  appId: '1:344590120751:web:d1d7acb579da0d9a6a13da',
};
const firebase = Firebase.initializeApp(config);

export { firebase };
