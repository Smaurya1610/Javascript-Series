// Date

let mydate=new Date();
console.log(mydate);

console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toTimeString());

console.log(mydate.toISOString());
console.log(mydate.toJSON());

console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

console.log(typeof mydate)

// Note
// 1---- new keyword se kuch bhi bnayege[date,number,string]  wo aik object hi return krta hai
// 2---- Month 0 se start hote hai javascript k andrr

let myrealDob=new Date(2004,9,16)
let mynewDob=new Date(2005,0,16,11,11)
console.log(myrealDob.toLocaleDateString())
console.log(mynewDob.toLocaleString())

let createddate=new Date("2006-1-12")//yyyy-mm-dd   // Best (ISO format)
console.log(createddate.toLocaleString())

let createddate1=new Date("01-13-2009")//mm-dd-yyyy
console.log(createddate1.toLocaleString())
// dd-mm-yyyy    support nhi krta hai directly

let mytimestamp=Date.now()//get time in ms

console.log(mytimestamp);
console.log(createddate1.getTime());
console.log(Date.now()/1000)// get time in second   //give decimal value
console.log(Math.floor(Date.now()/1000)) //with decimal value 

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());
console.log(newdate.getMinutes());
console.log(newdate.getMilliseconds());
console.log(newdate.getHours());
console.log(newdate.getFullYear());
console.log(newdate.getDay());
console.log(newdate.getDate());

// `${newdate.getdate()} and the time is ....` 

console.log(newdate.toLocaleString("default",{
    weekday:"long"
}))