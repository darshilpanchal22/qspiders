console.log("dom methods")
//^ DOM access method = elements by their id,class,tsgname,name and css
//! types of DOM access methods

//  *document.getElementsbyid("idname")
//  *document.getElementsbyClassName("classname")
//  *document.getElementsbyTagName("Tagname")
//  *document.getElementsbyName("name")
//  *document.queryselector("css-selector")
//  *document.queryselectorAll("css-selector")

//! document.getElementsbyid("idname")
//? the dom getElementsbyid() method allows us to  access the html elementby their specified id name
//? syntax = document.getElementsbyid("idname")
//? return type = single html elemnent
//~ if the given id not present the .getElementsbyid method will retrun 'null' as a output
let mood = document.getElementsById("status")
console.log(mood);

//! style property in js
mood.style.backgroundColor = "pink"
mood.style.border = "2px solid black"