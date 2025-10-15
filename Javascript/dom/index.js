console.log("dom in js")

// ! DOM
// ? Dom stans for Document Object Model in js
// ? Dom is an Api (Application Programing Interface)
// ? Dom is also used to manipulate the HTML Elements / document for providing the functionalities
// ? Manipulation Means Create, modify or remove the elements

// ! What is DOM Tree?
// ? The DOM Tree is a hierarchical representation of HTML Document
// ? Inverted tree-like Structure

// ! Why Do We Need DOM?
// ? The bridge between html and js document
// ? To allow us to add dynamic content
// ? Without dom you can’t manipulate the html document

// ! Document
// ? document represents the html structure / documents in js.
// ? document is also called as root node

// * DOM Types
// & 1) HTML DOM -> IT IS ONLY FOR HTML DOCUMENTS
// & 2) XML DOM -> IT IS ONLY FOR XML DOCUMENTS
// & 3) CORE DOM -> IT IS FOR ANY TYPE OF DOCUMENTS
// & 4) REACT DOM -> FOR REACT JS


console.log(document)
console.log(document.head)
console.log(document.title)
document.title = "this is title "
console.log(document.title)
console.log(document.all)
console.log(document.body)
console.log(document.documentElement)


// ! What is node in JS?
// ? The general term for each and everything in js;
// ? for example -> element, comment, text, attribute, etc.

// * Types oF node:
// ^1) element node  (1)-> h1, p, ul, li, img etc
// ^2) comment node (8) -> <!-- This iS an Comment -->
// ^3) text node(3) -> content or data
// ^4) attribute node (2) -> id, class, src, href, alt etc...
// ^5) document node (9)-> root node
// ^6) leaf node -> last node present inside the hierarchy.
//^ that can be anything text or any element


//? the direct access to dom elements:
//& document.links -> anchor tags
//& document.images -> for images
//& document.scripts -> for js scripts
//& document.styleSheets ->for stylesheets
//& document.forms -> for forms

//! document.links
let htmlCollection = document.links;
console.log(htmlCollection)
console.log(Array.isArray(htmlCollection))

//!document.images
console.log(document.images) //HTMLCollection

//! document.scripts 
console.log(document.scripts)  //HTMLCollection

//! document.stylesheets
console.log(document.styleSheets)

//! document.forms
console.log(document.forms)

//^ indirect access to the HTML elements
//? parentnode
//? childnodes - nodelist -collection of different types of nodes
//? children

console.log("dom access methods")

// ! 1) document.getElementById() : 
// ? The document.getElementById() method allows us to access the single html element by its specified id name
// ? Syntax : document.getElementById("idname")
// ? ReturnType : single element object

let heading = document.getElementById("mainHeading");
console.log(heading)
heading.style.color = "blue";
heading.style.textTransform = "uppercase";


// ! 2) document.getElementsByClassName() : 
// ? The document.getElementsByClassName() method allows us to access multiple html elements by their specified class name
// ? Syntax : document.getElementsByClassName("classname")
// ? ReturnType : HTML Collection

let paras = document.getElementsByClassName("paras");
console.log(paras)
console.log(Array.isArray(paras))
// paras.style.color ='red';

// ~ 1) Array.from:
let convertedHTMLCollectionIntoAnArray = Array.from(paras);
console.log(convertedHTMLCollectionIntoAnArray, "hii")
console.log(Array.isArray(convertedHTMLCollectionIntoAnArray))

convertedHTMLCollectionIntoAnArray.forEach((p, i) => {
    p.style.color = 'red';
    p.style.fontWeight = "bold";
})

// ! 3) document.getElementsByTagName() : 
// ? Document.getElementsByTagName() method allows us to access the html elements by their specified tagname or element name
// ? syntax : document.getElementsByTagName("tagname")
// ? returns html collection

let deolfam = document.getElementsByTagName("span");
console.log(deolfam)

Array.from(deolfam).forEach((ele, i) => {
    ele.style.backgroundColor = "yellow";
    ele.style.padding = "5px";
});

// ! 4) document.querySelector() :
// ? The document.querySelector() method allows us to access the first html element that matches a CSS selector
// ? Syntax : document.querySelector("selector")
// ? ReturnType : single element object

let firstPara = document.querySelector(".paras");
console.log(firstPara)
firstPara.style.border = "2px solid green";
firstPara.style.padding = "10px";

// ! 5) document.querySelectorAll() :
// ? The document.querySelectorAll() method allows us to access all html elements that match a CSS selector
// ? Syntax : document.querySelectorAll("selector")
// ? ReturnType : NodeList

let allParas = document.querySelectorAll(".paras");
console.log(allParas)
console.log(Array.isArray(allParas))

allParas.forEach((p, i) => {
    p.style.backgroundColor = i % 2 === 0 ? "#f0f0f0" : "#d0f0ff";
    p.style.margin = "5px";
})


