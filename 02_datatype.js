"Use strict"; // treat all JS code as newer version

// alert("Sameer") // we are using nodejs ,not browser
console.log(3 + 3);
console.log("sameer"); // code readability that should be high

// Datatype are of two categories
// 1- primitive
// 2 - non premitive
//  all the primitive datatype are call by value    means direct memory location nhi diya jata    aap jo bhi chage krte hai value k copy m chamge hoti hai memory m nhi

/* primitive
Data Type	Example
Number	   10, 3.14
String	  "Sameer"
Boolean 	true, false
Null	    null [standalone value]
Undefined	undefined
Symbol	   Symbol("id")[unique]
BigInt	 12345678901234567890n*/

const agevalue=23.3;
let age = 32;
let name = "sameer";
let loggedIn = true;
let salary;
let state = null;
let id = Symbol("123");
let anotherid = Symbol("123");

let bigIntValue = 123123n;  // bigint likhne k lia bs kisi andrr k end m     "n" lga di

console.log(id===anotherid);
console.log(id==anotherid);   //  symbol m agar value bhi same pass karoge phir bhi  dino value alag hi rahegi

// typeof    is operator used to find the type of variable
console.table([
  { value: age, type: typeof age },
  {value:agevalue,type:typeof agevalue},
  { value: name, type: typeof name },
  { value: loggedIn, type: typeof loggedIn },
  { value: salary, type: typeof salary },
  { value: state, type: typeof state },
  { value: id, type: typeof id },
  { value: anotherid, type: typeof anotherid },
  { value: bigIntValue, type: typeof bigIntValue },
]);


/*non primitive
Data Type	Example
Object   	{name:"Sameer"}
Array	     [1,2,3]
Function	function(){}*/

const heros=["saktiman","nagraj"]  //array

let myobj={     //curly bracket k andrr hai toh  object
  name:"sameer",
  age:"21"

  }

const myfunction=function(){
  console.log("hello wrld");
}
console.log(typeof myfunction)
console.log(typeof heros)
console.log(typeof myobj)
console.log(typeof 10n)