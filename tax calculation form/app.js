function taxcalculator(name2,salary2){
    name2=document.getElementById("name").value;
    salary2=document.getElementById("salary").value;

    if(salary2<=300000){
        document.getElementById("td1").value=0;
        document.getElementById("td2").value=0;
        document.getElementById("Total").value=0;
        document.getElementById("result").value=`${name2} you are Tax-free`
    }
    else if(salary2<=600000){
        deduction1=30000;
        deduction2=(salary2-300000)*0.1;
        totaldeduction=deduction1+deduction2;

        document.getElementById("td1").value=deduction1;
        document.getElementById("td2").value=deduction2;
        document.getElementById("Total").value=totaldeduction;
        document.getElementById("result").value=`${name2} your payable tax amount is :`+" " +totaldeduction;

    }
    else if(salary2 > 600000){
        deduction1=60000;
        deduction2=(salary2-600000)*0.2;
        totaldeduction=deduction1+deduction2;

        document.getElementById("td1").value=deduction1;
        document.getElementById("td2").value=deduction2;
        document.getElementById("Total").value=totaldeduction;
        document.getElementById("result").value=`${name2} your payable tax amount is :`+" " +totaldeduction;
    }
    else{
        document.getElementById("td1").value="";
        document.getElementById("td2").value="";
        document.getElementById("Total").value="";
    }


}








