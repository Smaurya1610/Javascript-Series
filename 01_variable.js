/************************************************
 *        JavaScript Variables Example
 ************************************************/

/*
------------------------------------
var -  old way of declare variable
-----------------------------------
var name = "Sameer";   
name = "Rahul";   //  Reassign allowed
var name = "Amit"; //    Re-declare allowed

------------------------------------
let - new way of declare variable
-----------------------------------
let age = 20;
age = 21;      // Reassign Allowed

let age = 22;  // Re-declare Error

-------------------------------------
const - declare constant[Value does not change]
------------------------------------
const pi = 3.14;

pi = 3.1415;   //  reassign Error*/

// Constant variables (value change nahi ho sakti)
const accountId = 123123
const account_id = 143143
const accountid = 156156

// Email variable
let accountEmail = "sameerkushwaha@gmail.com"

// Password variable
var accountPassword = "123123"

// City variable (without let/var/const)
accountCity = "Saidpur"

let accountState;

// Single value print karna
console.log(accountId)

// Table format me values print karna
console.table([
    accountId,
    account_id,
    accountid,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

// accountId=323232   produce error
accountEmail="sam@1610"
accountPassword="343434"
accountCity="jaipur"

console.table([
    accountId,
    account_id,
    accountid,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])
/* prefer not to use var
because of issue in block scope and functional scope*/