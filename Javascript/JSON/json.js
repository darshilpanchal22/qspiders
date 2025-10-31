console.log("json in js");
//! JSON
//* json stands for js object notation
//* json it is used to format the data(structure wise)
//* .json is the extention for json file    
//*   for ex db.json

//& whenever you are sending data from client to server data should in the form of string
//& whenever you are fetching data from server to the client






//? 1 json.stringify()
// the json.stringify() method will convert the js object into the json string
//? syntax json.stringify(object)

let employee = {
    empname: "john",
    empage: 20,
}
console.log(employee)

let jsonString = JSON.stringify(employee)
console.log(jsonString)

let jsonString2 = '{"empName":"smith", "empage":20}'
console.log(jsonString2)

let jsObject = JSON.parse(jsonString2)
console.log(jsObject)
