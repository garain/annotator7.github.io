
 // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey: "AIzaSyBxQUY7-aEBCMUHRdQU3cW0QXRwoGTlPDI",
  authDomain: "annotator-e263c.firebaseapp.com",
  databaseURL: "https://annotator-e263c.firebaseio.com",
  projectId: "annotator-e263c",
  storageBucket: "annotator-e263c.appspot.com",
  messagingSenderId: "684775160149",
  appId: "1:684775160149:web:4065bbc47901e7d2"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var messagesRef=firebase.firestore().ref('Annotations');

window.onload=function(){
  document.getElementById('contactForm').addEventListener('submit',submitForm);
}




//Submit form
function submitForm(e){
 e.preventDefault();

//Get values
var Comment1=getInputVal('Comment1');
var Comment2=getInputVal('Comment2');
var Discourse1=getInputVal('Discourse1');
var Discourse2=getInputVal('Discourse2'); 

//Save message
saveMessage(Comment1,Comment2,Discourse1,Discourse2);

//Show alert
document.querySelector('.alert').style.display='block';

//Hide alert after 3 seconds
setTimeout(function(){
	document.querySelector('.alert').style.display='none';
},3000);

//Clear form
document.getElementById('contactForm').reset();
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}
 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

