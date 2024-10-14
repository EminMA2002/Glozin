const shopcategoryhead = document.querySelectorAll(".shopcategoryhead")

for(let i = 0; i < shopcategoryhead.length; ++i){
    shopcategoryhead[i].addEventListener("click", ()=>{
      const shopcategorycontent =  shopcategoryhead[i].nextElementSibling;
      const shopcategoryi = shopcategoryhead[i].querySelector("button > i")
      
      if(shopcategorycontent.style.height){
        shopcategorycontent.style.height = null;
        shopcategoryi.setAttribute("class", "bi bi-plus-lg")
      } else{shopcategorycontent.style.height = shopcategorycontent.scrollHeight + "px";
        shopcategorycontent.style["margin-top"] = "20px";
        shopcategoryi.setAttribute("class", "lni lni-minus")
      }
    })
}

const sortbuyfather = document.querySelector(".sortbuyfather");
const sortbuycategoriesinvisiblediv = document.querySelector(".sortbuycategoriesinvisiblediv")



sortbuyfather.addEventListener("click", ()=>{
  console.log(sortbuycategoriesinvisiblediv.style.opacity);
  
  if(sortbuycategoriesinvisiblediv.style.opacity == 1){    
    sortbuycategoriesinvisiblediv.style.opacity= 0

  }else{
    sortbuycategoriesinvisiblediv.style.opacity= 1
    
  }
})

document.addEventListener("click", ()=>{

  if(sortbuycategoriesinvisiblediv.style.opacity == 1){    
    sortbuycategoriesinvisiblediv.style.opacity= 0
  }
})