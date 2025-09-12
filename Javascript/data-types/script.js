console.log("data types in js"
)

//? data types 
//! data types itself suggest the which type of data you are going to store inside the variable

//? 2 tpes of data types 
//~ 1 primitive - inbuilt 
//~ 2 non-primitive user-defined

// 1 primitive

//! 7 types 

let num = 10;
console.log(num);

//types of operator
//? type of operator is unary operator
//? it is used to check the datatype of the variables
//? syntax: typeof (varname) or varname
console.log(typeof num);


//! 1 string
//? string is the combination of charactors
//? string can be included as alphabets (capital or  lower) digits special digits whitespace alphanumeric 

//?way to create string
//by using ''
let str1 = 'dev'
console.log(str1)
console.log(typeof str1)

//by using ""
let str2 = "devraj"
console.log(str2)

//by using ``
//? advantage: to acceess the dynamic values from the variables
let statuscode = 200;
console.log(`Status code is : ${statuscode}`);

//? create multi line string
let multilinestring = `this is multi line string`
console.log(multilinestring)

//?boolean
let bool = true;
console.log(bool)
console.log(typeof bool)

//? null
//? null means empty or nothing but zero 
let nullvalue = null;
console.log(nullvalue)
console.log(typeof nullvalue)

// undefined
let notdefinecvalue;
console.log(notdefinecvalue)
console.log(typeof notdefinecvalue);

// big int 
//? big type of integer or numeric data
//? 2^ 53 equals or greater the
//? suffix at the end 'n'

let smallvalue = 232445354;
let bigvalue = 12343455675445653822398565928356589256239856n
console.log(smallvalue);
console.log(bigvalue);

//symbol ();
//? symbol () it used for creating unique values
let value1 = Symbol("hello")
let value2 = Symbol("hello")
let value3 = Symbol(20)

console.log(value1)
console.log(value2)
console.log(value1 == value2) //false
console.log(value1.description == value2.description) //true

//~ description property 
console.log(value1.description);