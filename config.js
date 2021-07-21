import firebase from 'firebase'
require("@firebase/firestore")
const firebaseConfig = {
  apiKey: "AIzaSyD9BiMcHjHbWR4_Mj6sSP6cBVMsq6OAm40",
  authDomain: "storyhub2-f38e0.firebaseapp.com",
   databaseURL: "https://storyhub2-f38e0.firebaseio.com",
  projectId: "storyhub2-f38e0",
  storageBucket: "storyhub2-f38e0.appspot.com",
  messagingSenderId: "337937951195",
  appId: "1:337937951195:web:d3110595bf42f42b86dffe"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()

