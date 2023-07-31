function billsplit(){

let amount2 = document.getElementById("amount").value;
let persons2= document.getElementById("persons").value;
let result = amount2/persons2;

document.getElementById("last").value="Each Person Should Pay : "+result.toFixed(2);

 document.getElementById("amount").value=""
 document.getElementById("persons").value=""

 if(amount2 == 0 || amount2 == ""){
    document.getElementById("one").innerText=" Please enter valid details"
    document.getElementById("last").value=""
 }
 else if(persons2 == 0 || persons2 == ""){
    document.getElementById("two").innerText="Please enter valid details"
    document.getElementById("last").value=""
 }
 else{
    document.getElementById("one").innerText=""
    document.getElementById("two").innerText=""
 }

 
}

