const hamurgeropened = document.querySelector(".hamurgeropened")
const hamurgeropenedchild = document.querySelector(".hamurgeropenedchild")
const hamburgermenuicon = document.querySelector(".hamburgermenuicon")

hamburgermenuicon.addEventListener("click", () => {
    hamurgeropened.style.width = "100%"
    if (window.screen.width < "768px") {
        hamurgeropenedchild.style.width = "40%"
    } else {
        hamurgeropenedchild.style.width = "70%"
    }
})

hamurgeropened.addEventListener("click", () => {
    hamurgeropened.style.removeProperty("width")
    hamurgeropened.style.removeProperty("width")
})

hamurgeropenedchild.addEventListener("click", (e) => {
    e.stopPropagation()
})



const searchiconhamburger = document.querySelector(".searchiconhamburger")
const searchopened = document.querySelector(".searchopened") 
const searchopenedchild = document.querySelector(".searchopenedchild") 

searchiconhamburger.addEventListener("click",()=>{
    searchopened.style.width="100%"
    searchopenedchild.style.width="60%"
})
searchopened.addEventListener("click",()=>{
    searchopened.style.width="0%"  
})
searchopenedchild.addEventListener("click",(e)=>{
    e.stopPropagation();
})


const person = document.querySelector(".personicon");
const signinx = document.querySelector(".signinx");
const signinfather = document.querySelector(".signinfather");
const signinchild = document.querySelector(".signinchild");
const signincreatebutton = document.querySelector(".signincreatebutton");
const signupfather = document.querySelector(".signupfather");
const signupchild = document.querySelector(".signupchild");
const signuploginbutton = document.querySelector(".signuploginbutton");

person.addEventListener("click", ()=>{
    if(signinfather.classList.contains("displaynone")){
        signinfather.classList.remove("displaynone")
    }
});

signinx.addEventListener("click", ()=>{
        signinfather.classList.add("displaynone")
});

signinfather.addEventListener("click", ()=>{
    signinfather.classList.add("displaynone")
});

signinchild.addEventListener("click", (e)=>{
    e.stopPropagation();    
});

signincreatebutton.addEventListener("click", ()=>{
    signinfather.classList.add("displaynone")
    signupfather.classList.remove("displaynone")
})

signuploginbutton.addEventListener("click", ()=>{
    signupfather.classList.add("displaynone")
    signinfather.classList.remove("displaynone")
})

signupfather.addEventListener("click", ()=>{
    signupfather.classList.add("displaynone")
});

signupchild.addEventListener("click", (e)=>{
    e.stopPropagation();
});
