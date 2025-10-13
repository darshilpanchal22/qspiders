console.log("dom in js")

// ! DOM
// ? Dom stans for Documment Objectr Model in js
// ? Dom is an Api (Application Programing Interface)
// ? Dom is also used to manipulate the HTML Elements /documen for providing the Funcnalities
// ? Manipulation Means Create,modify or remove the elements

// ! What is DOM Tree?
// ? The DOM Tree is a hierarchical representation of HTML Document
// ? Inverted tree like Structure

// ! Why Do We Need DOM?
// ? The bridge between html and js  document
// ? To allow us to  add dynamic content
// ? without dom u cant manipulate the html document

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
console.log(document.html)


// ! What is node in JS?
// ? The genral term for each and everything in js;
// ? for example -> element,comment,,text,attribute,etc.

// * Types oF node:
// ^1) element node  (1)-> h1,p,ul,li,img etc
// ^2) comment node (8) -> <!-- This iS an Comment -->
// ^3) text node(3) -> content or data
// ^4) attribute node (2) -> id,class,src,href,alt etc...
// ^5) document node (9)-> root node
// ^6)leaf node -> last node present inside the hierarchy.
//^ that can be anything text or any element


//? the direct access to dom elements:
//& document.link -> anchor tags
//& document.images -> for images
//& document.script -> for js scripters
//& document.stylesheets ->for  stylesheets
//& document.forms -> for forms

//! document.links
let htmlCollection = document.links;
console.log(htmlCollection)
console.log(Array.isArray(htmlCollection))

//!document.images
console.log(document.images) //HTMLCollection

//! document.scripts 
console.log(document.scripts)  //HTMLCollection

//! document.stylesheet
console.log(document.styleSheets)

//! document.forms
console.log(document.forms)
//! indirect access to the HTML elements
//? parentnode
//? childnodes - nodelist -collection of different types of nodes
//? children

let ul = document.getElementById("List")
console.log(ul.childNodes);

