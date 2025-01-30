var tabLinks=document.querySelectorAll(".tab-links");   //more than one tab-links classes
var tabContents=document.querySelectorAll(".tab-content");  //more than one tab-content classes

var typed=new Typed("#animation",{
strings:["xyz","abc"],
typeSpeed:150,
backSpeed:150,
loop:true,
})

function openSection(tabName)
{
for(let tabLink of tabLinks)
{
tabLink.classList.remove("active-link");
}

for(let tabContent of tabContents)
{
tabContent.classList.remove("active-tab");
}

//********************
//This code  is adding a class called "active-link" to an element 
//in response to some event (like a click or hover).
//active-link has the styling for slide effect when clicked
event.currentTarget.classList.add("active-link");  


//when clicked
//id (skills,experience,education) k basis pr usme ek class add krdega active-tab 
document.getElementById(tabName).classList.add("active-tab");

}