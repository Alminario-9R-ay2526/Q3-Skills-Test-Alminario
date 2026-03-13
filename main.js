function computeAnswer(){

let quantity = Number(document.getElementById("Qty").value);

let price = 250;
let subtotal = quantity * price;
let serviceFee = 50;
let total = subtotal + serviceFee;

document.getElementById("subtotal").innerHTML = subtotal;
document.getElementById("total").innerHTML = total;
}
function resetForm(){
document.getElementById("subtotal").innerHTML = 0;
document.getElementById("total").innerHTML = 0;
}