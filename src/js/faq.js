const faqvisiblediv = document.querySelectorAll(".faqcontentrightcontent_visiblediv")



for(let i = 0; i< faqvisiblediv.length; ++i){
    faqvisiblediv[i].addEventListener("click", ()=>{
        const faqinvisiblediv = faqvisiblediv[i].nextElementSibling;
      const clickedI = faqvisiblediv[i].querySelector("a > i")
        if(faqinvisiblediv.style.height){
            faqinvisiblediv.style.height = null;
            faqinvisiblediv.style.margin = null;
            clickedI.setAttribute("class","bi bi-plus-lg")
        }else{
            faqinvisiblediv.style.height = faqinvisiblediv.scrollHeight + "px";
            faqinvisiblediv.style["margin-top"] = "20px";
            clickedI.setAttribute("class","lni lni-minus")

           
        }
    })
}



// faqvisiblechildrens[i].children.classList.replace("bi bi-plus-lg", "lni lni-minus");
