
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

var com_in1=0,com_in2=0,com_in3=0,Len_max1=data1.phrases.length,Len_max2=data2.phrases.length,Len_max3=data3.phrases.length;

window.onload=function(){
	/*
	document.getElementById('contactForm').getElementById("submit").onclick=submitForm;
	document.getElementById('contactForm2').getElementById("submit2").onclick=submitForm2;
	document.getElementById('contactForm3').getElementById("submit3").onclick=submitForm3;
*/
function nextComment(){
if(com_in1<Len_max1-1)
com_in1=com_in1+1;
} 
function nextComment2(){
if(com_in2<Len_max2-1)
com_in2=com_in2+1;
} 
function nextComment3(){
if(com_in3<Len_max3-1)
com_in3=com_in3+1;
}
	/*
document.getElementById('submit').onclick=submitForm;
document.getElementById('next').onclick=nextComment;
 document.getElementById('contactForm').addEventListener('submit',submitForm);
document.getElementById('submit2').onclick=submitForm2;
document.getElementById('next2').onclick=nextComment2;
document.getElementById('contactForm2').addEventListener('submit',submitForm2);
document.getElementById('submit3').onclick=submitForm3;
document.getElementById('next3').onclick=nextComment3;

document.getElementById('contactForm3').addEventListener('submit',submitForm3);

var output=document.getElementById('Comment1');
var Content={
"FirstName":"Avishek",
"LastName":"Garain"
}

function setup(file,fun) {
  loadJSON(file, fun);
}
*/
 
function drawData1() {
var data=data1;
var output1=document.getElementById('Comment1');
var output2=document.getElementById('Comment2');
 output1.innerHTML=data.phrases[com_in1].body;
 output2.innerHTML=data.phrases[com_in1+1].body;
}

function drawData2() {
	var data=data2;
var output1=document.getElementById('Comment1.2');
var output2=document.getElementById('Comment2.2');
 output1.innerHTML=data.phrases[com_in2].body;
 output2.innerHTML=data.phrases[com_in2+1].body;
}

function drawData3() {
	var data=data3;
var output1=document.getElementById('Comment1.3');
var output2=document.getElementById('Comment2.3');
 output1.innerHTML=data.phrases[com_in3].body;
 output2.innerHTML=data.phrases[com_in3+1].body;
 }
drawData1();
drawData2();
drawData3();
	
/*

output.innerHTML=Content.FirstName+' '+Content.LastName;*/


}

//Submit form
function submitForm(e){
 e.preventDefault();
//var messagesRef=firebase.database().ref('Annotations');
var Comment1=data1.phrases[com_in1].id;
var Comment2=data1.phrases[com_in1+1].id;
var Discourse1=loopSelected('Discourse1');
var Discourse2=loopSelected('Discourse2'); 
	
function loopSelected(id) { 
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

 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2){
	var newMessageRef=firebase.database().ref('Annotations').push();
	newMessageRef.set({
		Comment1: data1.phrases[com_in1].id,
		Comment2: data1.phrases[com_in1+1].id,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

function submitForm2(e){
 e.preventDefault();
	//var messagesRef2=firebase.database().ref('Annotations2');
var Comment1=data2.phrases[com_in2].id;
var Comment2=data2.phrases[com_in2+1].id;
var Discourse1=loopSelected('Discourse1.2');
var Discourse2=loopSelected('Discourse2.2'); 
	
function loopSelected(id) { 
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
document.getElementById('contactForm2').reset();
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2){
	var newMessageRef2=firebase.database().ref('Annotations2').push();
	newMessageRef2.set({
		Comment1: data2.phrases[com_in2].id,
		Comment2: data2.phrases[com_in2+1].id,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

function submitForm3(e){
 e.preventDefault();
	//var messagesRef3=firebase.database().ref('Annotations3');

var Comment1=data2.phrases[com_in3].id;
var Comment2=data2.phrases[com_in3+1].id;
var Discourse1=loopSelected('Discourse1.3');
var Discourse2=loopSelected('Discourse2.3'); 
	
function loopSelected(id) { 
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
document.getElementById('contactForm3').reset();
 }
//Function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}

 
//Save message to firebase
function saveMessage(Comment1,Comment2,Discourse1,Discourse2){
	var newMessageRef3=firebase.database().ref('Annotations3').push();
	newMessageRef3.set({
		Comment1: data3.phrases[com_in3].id,
		Comment2: data3.phrases[com_in3+1].id,
		Discourse1: Discourse1,
		Discourse2: Discourse2
	});
}

