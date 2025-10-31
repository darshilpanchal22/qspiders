console.log("dom manipulation")

//? the DOM manipulation

//& the dom manipulation methods are helps to create, modify or remove the DOM structure
//^3 methods
//*createElement()
//*appendChild()
//*removeChild()

//! createElement()
//? the DOm manipulation method allow us to create a new node inside the existing dom tree at the end of the structure
//? syntax: documnent.creatElement("name-ofelement  or node-name")

let newPara = document.createElement("p");
console.log(newPara);

//! providing the id
// newpara.id = "para"
// newpara.className = "paraclass"

//! providing the attribute by using setATttirbute() method
newPara.setAttribute("id", "para1")
newPara.setAttribute("class", "para")

let img = document.createElement("img")
console.log(img)
img.setAttribute("src", "https://images.unsplash.com/photo-1605292356183-a77d0a9c9d1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl3YWxpfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000")

//! appendChild()
//? the dom appendchild() method help us to add the newly created node or element inside the dom strucure
//? syntax: parentElement.appendChild(child-element)

document.getElementById("btn").addEventListener("click", () => {
    document.body.appendChild(newPara);
    newPara.textContent = "i have created dynamically with the help of createElement Method"
})


//! removeChild()
//?the dom removechild() method help us to remove the dynamically created element in the dom tree
//? syntax: parentelement.removechild(child-element)
document.getElementById("removebtn").addEventListener("click", () => {
    document.body.removeChild(newPara)
})

//* content  manipulation methods
//? to manipulate the content means get the content , set the content or replace the content
//? we have 3 properties which will help  us manipulate the content
//& textcontent
//& innerHTML
//& innerText

//! textcontent
//? it will return the text which is  present on the screen or which is visible on the screen as well as hidden content
let btn = document.createElement("button")
console.log(btn)

document.body.appendChild(btn)
//! setting the content
btn.textContent = "click me"
//! getting the content (accesing)
console.log(btn.textContent)


//! innerText
//? it will return the text which is present on the screen or which is visible on the screen
let ul = document.getElementById("list")
console.log(ul.innerText)
console.log(ul.textContent)

//! innerHTMl
let para = document.getElementById("para")
console.log(para.innerHTML)
para.innerHTML = para.innerHTML + "<span>highlighted text</span>";
console.log(para)
console.log(para.outerHTML)