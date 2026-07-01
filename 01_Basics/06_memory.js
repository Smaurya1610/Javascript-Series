// ------------------------------------
// Memory in Js
// ---------------------------------


/* 1 --- Stack(primitive)
2---- Heap(non primitive) */

// Stack se kisi variable ki data lege toh data k copy hi  milta hai reference nhi
// Heap se kisi variavle ki data copy karege toh refrence milta hai means direct memory m data jaha hai uska location aur aap direct real data work krte hai copy prr nhi


// On Stack
let name="sameer"
let anothername=name
anothername="sani"
console.log(anothername)
console.log(name)

// On Heap
let userone={
    email:"sameer@1619",
    upi:"upi@bhil"
}
 let usertwo=userone
 usertwo.email="sani@1616"

 console.log(userone)
 console.log(usertwo)