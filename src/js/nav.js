const hamurgeropened = document.querySelector(".hamurgeropened")
const hamurgeropenedchild = document.querySelector(".hamurgeropenedchild")
const hamburgermenuicon = document.querySelector(".hamburgermenuicon")

hamburgermenuicon.addEventListener("click", () => {
    hamurgeropened.style.width = "100%"
    console.log(window.innerWidth);
    
    if (window.innerWidth < 768) {
        hamurgeropenedchild.style.width = "70%"
    } else {
        hamurgeropenedchild.style.width = "40%"
    }
})

hamurgeropened.addEventListener("click", () => {
    hamurgeropened.style.width="0"
})

hamurgeropenedchild.addEventListener("click", (e) => {
    e.stopPropagation()
})


window.addEventListener("resize", ()=>{
 hamurgeropened.style.width="0"
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


const bag = document.querySelectorAll(".bag")
const openedBag = document.querySelector(".openedBag")
const openedBagChildHeader = document.querySelector(".openedBagChildHeader button")
const openedBagChild = document.querySelector(".openedBagChild")

for(let i = 0; i < bag.length; ++i){
    bag[i].addEventListener("click",()=>{
        openedBag.classList.remove("displaynone")
    })
}

openedBagChildHeader.addEventListener("click",()=>{
    openedBag.classList.add("displaynone")
})

openedBagChild.addEventListener("click",(e)=>{
    e.stopPropagation()
})

openedBag.addEventListener("click",()=>{
    openedBag.classList.add("displaynone")
})
