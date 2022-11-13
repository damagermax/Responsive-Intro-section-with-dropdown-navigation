

const featuresDropdwon=document.querySelector(".features-dropdown")
const companyDropdwon=document.querySelector(".company-dropdwon")

const features=document.querySelector("#features")
const company=document.querySelector("#company")

const navMenu=document.querySelector(".menu")



 features.addEventListener("click",()=>{
    featuresDropdwon.classList.toggle("show")
})


company.addEventListener("click",()=>{
    companyDropdwon.classList.toggle("show")
})


navMenu.addEventListener("click",()=>{
    document.querySelector(".navbar").classList.toggle("show")
   
})