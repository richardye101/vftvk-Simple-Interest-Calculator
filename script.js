var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);

function updateInterest()
{
    document.getElementById("interest").innerHTML = interest;    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval + "%";
}

function validatePrincipal()
{
    if(document.getElemetnById("principal") < 1)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {
        updateInterest();
    }
}

function compute()
{
    principal = document.getElementById("principal").value;
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
}
