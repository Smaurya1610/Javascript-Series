// ---------------------------------
// JavaScript Comparison Operators:
// ---------------------------------

// ==  → Equal (type convert karta hai) value compare krta hai time aane prr conert bhi krta hai type
console.log(3=="3");
console.log(3==3);
console.log(3==4);
console.log(true==1);
console.log(false ==0);

// === → Strict Equal (value aur type dono same hone chahiye)
console.log(3==="3");
console.log(3===3);
console.log(3===4);
console.log(true===1);
console.log(false ===0);

// !=  → Not Equal
console.log(3!="3");
console.log(3!=3);
console.log(3!=4);
console.log(true!=1);
console.log(false !=0);

// !== → Strict Not Equal
console.log(3!=="3")
console.log(3!==3)
console.log(3!==4)
console.log(true!==1)
console.log(false !==0)

// > → Greater Than
console.log(3 > "2");
console.log(3 > 3);
console.log(3 > 4);
console.log(true > 1);
console.log(false > 0);

// <   → Less Than
5 < 10 // true

// > =  → Greater Than or Equal
> 10 >= 10 // true

// <=  → Less Than or Equal
5 <= 10 // true

// Note:
// JavaScript me === aur !== use karna better practice mana jata hai.
console.log(null>0);
console.log(null>=0);
// yaha null sero m undefined m special rule hai   null zero k sath false aur undefined k sath true value return krta hai   equal to comparison m
console.log(null==0);  
console.log(null == undefined);

// kyuki ye convert hokrr NaN bn jata hai
console.log(undefined > 0);   // false
console.log(undefined == 0);  // false
console.log(undefined >= 0);  // false

// null aur undefined jaise comparison ko aksrr hm avoid krete hai
