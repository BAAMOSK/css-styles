import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initalizeApp(firebaseConfig)

console.log('It is connecting the datbase.')

export default firebaseApp.firestore()
