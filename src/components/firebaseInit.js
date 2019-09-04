import firebase from 'firebase'
import 'firebase/firebase-firestore'
import firebaseConfig from './firebaseConfig'
const app = firebase.initializeApp(firebaseConfig)
export default app.firestore()
