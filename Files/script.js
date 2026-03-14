// Typing Animation
const text = ["Web Developer", "Programmer", "Software Engineer"];
let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){
current=text[i];

document.querySelector(".typing").textContent=
current.substring(0,j);

if(!isDeleting && j<current.length){
j++;
setTimeout(type,100);
}
else if(isDeleting && j>0){
j--;
setTimeout(type,50);
}
else{
isDeleting=!isDeleting;
if(!isDeleting)i=(i+1)%text.length;
setTimeout(type,800);
}
}

type();

// Form Validation
function validateForm(){
alert("Message Sent Successfully ✅");
return false;
}
