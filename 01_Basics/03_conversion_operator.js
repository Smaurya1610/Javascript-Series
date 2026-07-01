// conversion operators are operators that convert a value from one type to another

/*1. Unary Plus (+)
Converts its operand to a number.*/
let age="33"
let number=+age

let loggedin=true
let num=+loggedin

let value=null
let num2=+value

let string="12a"
let num3=+string

let un=undefined
let num4=+un

console.table([
    {oldValue:age,oldType:typeof age,Newvalue:number,newType:typeof number},
    {oldValue:loggedin,oldType:typeof loggedin,Newvalue:num,newType:typeof num},
    {oldValue:value,oldType:typeof value,Newvalue:num2,newType:typeof num2},
    {oldValue:string,oldType:typeof string,Newvalue:num3,newType:typeof num3},
    {oldValue:un,oldType:typeof un,Newvalue:num4,newType:typeof num4}
])
// Explicit type conversion means you intentionally convert a value from one data type to another using built-in functions.
// 1 --Number Conversion
let age="33"
let number=Number(age)

let loggedin=true
let num=Number(loggedin)

let value=null
let num2=Number(value)

let string="12a"
let num3=Number(string)

let un=undefined
let num4=Number(un)

console.table([
    {oldValue:age,oldType:typeof age,Newvalue:number,newType:typeof number},
    {oldValue:loggedin,oldType:typeof loggedin,Newvalue:num,newType:typeof num},
    {oldValue:value,oldType:typeof value,Newvalue:num2,newType:typeof num2},
    {oldValue:string,oldType:typeof string,Newvalue:num3,newType:typeof num3},
    {oldValue:un,oldType:typeof un,Newvalue:num4,newType:typeof num4}
])

// 2-- String ConversioBoolean

// 3--Boolean Conversion
let age=33
let number=Boolean(age)

let age1=0
let number2=Boolean(age1)

let loggedin=true
let num=Boolean(loggedin)

let value=null
let num2=Boolean(value)

let string="12a"
let num3=Boolean(string)

let string1=""
let num5=Boolean(string)

let un=undefined
let num4=Boolean(un)

console.table([
    {oldValue:age,oldType:typeof age,Newvalue:number,newType:typeof number},
    {oldValue:age1,oldType:typeof age1,Newvalue:number2,newType:typeof number2},
    {oldValue:loggedin,oldType:typeof loggedin,Newvalue:num,newType:typeof num},
    {oldValue:value,oldType:typeof value,Newvalue:num2,newType:typeof num2},
    {oldValue:string,oldType:typeof string,Newvalue:num3,newType:typeof num3},
    {oldValue:string1,oldType:typeof string1,Newvalue:num5,newType:typeof num5},
    {oldValue:un,oldType:typeof un,Newvalue:num4,newType:typeof num4}
])

// 4 -- parseInt
// it extract number from string from starting
let age="33"
let number=parseInt(age)

let age1="12.21"
let number2=parseInt(age1)

let loggedin="12abc"
let num=parseInt(loggedin)

let value="12bcd2323"
let num2=parseInt(value)

let string="bcd122"
let num3=parseInt(string)

let string1=""
let num5=parseInt(string)
console.table([
    {oldValue:age,oldType:typeof age,Newvalue:number,newType:typeof number},
    {oldValue:age1,oldType:typeof age1,Newvalue:number2,newType:typeof number2},
    {oldValue:loggedin,oldType:typeof loggedin,Newvalue:num,newType:typeof num},
    {oldValue:value,oldType:typeof value,Newvalue:num2,newType:typeof num2},
    {oldValue:string,oldType:typeof string,Newvalue:num3,newType:typeof num3},
    {oldValue:string1,oldType:typeof string1,Newvalue:num5,newType:typeof num5},
])
// .
// 5--parseFloat
// it extract float part from string