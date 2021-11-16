import firebase from 'firebase/app'
import 'firebase/database'

export const db = firebase
    .initializeApp({databaseURL : 'https://guidedvuefire9664-50574-default-rtdb.firebaseio.com/'})
    .database()

    //9664

export const drinkRef = db.ref('drinks')






