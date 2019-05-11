
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

var messagesRef=firebase.database().ref('Annotations');
var messagesRef=firebase.database().ref('Annotations2');
var messagesRef=firebase.database().ref('Annotations3');

window.onload=function(){
  document.getElementById('contactForm').addEventListener('submit',submitForm);
  document.getElementById('contactForm1').addEventListener('submit',submitForm);
  document.getElementById('contactForm2').addEventListener('submit',submitForm);
}


//Submit form
function submitForm(e){
 e.preventDefault();
//var zy=getInputList('Discourse1');
//alert(zy);
//Get values
var Comment1=getInputVal('Comment1');
var Comment2=getInputVal('Comment2');
var Discourse1=loopSelected('Discourse1');
var Discourse2=loopSelected('Discourse2'); 
	
function loopSelected(id) { 
    //var Discourse = document.getElementById(id);
    var selectedArray = new Array();
    var selObj = document.getElementById(id); 
    var i;
    var count = 0;
    for (i=0; i<selObj.options.length; i++) { 
        if (selObj.options[i].selected) {
            selectedArray[count] = selObj.options[i].value;
            count++; 
        } 
    } 
return selectedArray;
}
//loopSelected();
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
/*
var Discourse1 =  function(selectElement) {
  return [].reduce.call(selectElement.options, function(result, option) {
    if (option.selected) result.push(option.value);
    return result;
  }, []);
};*/
 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2,selectedArray){
	var newMessageRef=messagesRef.push();
	newMessageRef.set({
		Comment1: Comment1,
		Comment2: Comment2,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

