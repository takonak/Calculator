var number1 = document.getElementById("input1");
var number2 = document.getElementById("input2");
var resultelement = document.getElementById("result");
var element1 = document.getElementById("input3");
var element2 = document.getElementById("input4");
var headerelement = document.getElementById("header");


function mouseover(element)
{
    element.style.color="red";
}

function mouseout(element){
    element.style.color="black";
}


function calc(){
    var number1 = parseFloat(document.getElementById("input1").value);
    var number2 = parseFloat(document.getElementById("input2").value);
    var operator= document.getElementById("operator").value;
    var resultelement = document.getElementById("result");


    if(operator === "+"){
        document.getElementById("result").value = number1+number2;
    }
    if(operator === "-"){
        document.getElementById("result").value = number1-number2;
    }
    if(operator === "*"){
        document.getElementById("result").value = number1*number2;
    }
    if(operator === "/"){
        document.getElementById("result").value = number1/number2;
    }else{
        console.log("fill the gap")
    }
}

// function test(){
//     if (element1.value && element2.value) {
//         headerelement.innerHTML = element1.value + element2.value;
//     } else {
//         console.log("fill the gaps!")
//     }
// }


function myfunction(){
    if(number1.value === ""){
        number1.style.border = "2px solid red";
        resultelement.value = "";
    }else{
        number1.style.border = "2px solid black";
    }{

    }
    if(number2.value === ""){
        number2.style.border = "2px solid red";
        resultelement.value = "";
    }else{
        number2.style.border = "2px solid black";
    }
    if(number1.value === "" && number2.value === ""){
        number1.style.border = "2px solid black";
        number2.style.border = "2px solid black";
    }
    
}



