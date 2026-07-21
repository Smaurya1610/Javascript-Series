# Project related to dom

## Project link
[click here]

# Solution code

# projecr 1
``` Javascript
console.log("sameer")
const buttons=document.querySelectorAll(".button")

const body=document.querySelector("body")
const nav=document.querySelector("nav")

buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "green";
            
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "red";
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "yellow";
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "blue";
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            nav.style.backgroundColor = "yellow";
        }
        

    }
)
})
```