const btn = document.querySelector("#btn");
const bill = document.querySelector("#bill");
const tip = document.querySelector("#tipamount");
const totalspan = document.querySelector("#total");
const tipspan = document.querySelector("#tip");

function calculateTip() {
    const billvalue = parseFloat(bill.value);
    const tipvalue = parseFloat(tip.value);
    const tipamount = billvalue * (tipvalue / 100);
const totalvalue = billvalue + tipamount;
    
    totalspan.innerText = totalvalue.toFixed(2); 
    
    tipspan.innerText = tipamount.toFixed(2);  
}
btn.addEventListener("click", calculateTip);

