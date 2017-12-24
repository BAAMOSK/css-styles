import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initalizeApp(firebaseConfig)

let db = firebaseApp.database()
let employee_data = db.ref('employees')

