import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBaOXkb4NBTboxxQBXesO5MtXWIFLZihA4",
    authDomain: "financemanager-1d039.firebaseapp.com",
    databaseURL: "https://financemanager-1d039.firebaseio.com",
    projectId: "financemanager-1d039",
    storageBucket: "financemanager-1d039.appspot.com",
    messagingSenderId: "1053605504948"
   };

	if (!firebase.apps.length) {
	  const Firebase =   firebase.initializeApp(config);
	}
    
 export default Firebase;   