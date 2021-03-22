import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAEyj7F_KXgAI2td3N14-FcESjOEVCXSDI',
  authDomain: 'cafe-cupon.firebaseapp.com',
  projectId: 'cafe-cupon',
  storageBucket: 'cafe-cupon.appspot.com',
  messagingSenderId: '89398446849',
  appId: '1:89398446849:web:29b0af0010e6e807de2900',
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : ''
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const db = firebase.firestore()
export default firebase
