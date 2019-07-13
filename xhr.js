(function(){
	 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrLVJRMkrk8061e2yzLdoPAeWd6zrThFk",
    authDomain: "geeg-solution.firebaseapp.com",
    databaseURL: "https://geeg-solution.firebaseio.com",
    projectId: "geeg-solution",
    storageBucket: "geeg-solution.appspot.com",
    messagingSenderId: "1037948664054",
    appId: "1:1037948664054:web:1ebce21d42d484d8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const preObject = document.getElementById('object')


const dbRefObject = firebase.database().ref().child('object');

dbRefObject.on('value', snap => console.log(snap.val()));



}());