"Use strict"; // treat all JS code as newer version

// alert("Sameer") // we are using nodejs ,not browser
console.log(3 + 3);
console.log("sameer"); // code readability that should be high

// Datatype are of two categories
// 1- primitive
// 2 - non premitive

/* primitive
Data Type	Example
Number	   10, 3.14
String	  "Sameer"
Boolean 	true, false
Null	    null [standalone value]
Undefined	undefined
Symbol	   Symbol("id")[unique]
BigInt	 12345678901234567890n*/

/*non primitive
Data Type	Example
Object   	{name:"Sameer"}
Array	     [1,2,3]
Function	function(){}*/

let age = 32;
let name = "sameer";
let loggedIn = true;
let salary;
let state = null;
let id = Symbol("123");
let bigIntValue = 123123n;
// typeof    is operator used to find the type of variable
console.table([
  { value: age, type: typeof age },
  { value: name, type: typeof name },
  { value: loggedIn, type: typeof loggedIn },
  { value: salary, type: typeof salary },
  { value: state, type: typeof state },
  { value: id, type: typeof id },
  { value: BigInt, type: typeof BigInt },
]);
