const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const btn = document.querySelector("#btn");


function calculate(){
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value)/100;
  let  BMI = w / (h * h) ;
    if(BMI<18){document.querySelector("#output").innerText="under weight";
    }
   else if(BMI>=18 && BMI<25){
       document.querySelector("#output").innerText="normal weight";
   }
    
   else if(BMI>=25 && BMI <30){
       document.querySelector("#output").innerText = "over weight";
   } 
}
btn.addEventListener("click",calculate);