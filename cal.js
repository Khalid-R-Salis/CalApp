
function Add(){
    var InputeOne = +(document.getElementById("inputOne").value);
    var InputeTwo = +(document.getElementById("inputTwo").value);
    let Compute = InputeOne + InputeTwo;
    if(InputeOne !=" " && InputeTwo !=" " ){
    document.getElementById("Result").innerHTML = "The Sum is " + Compute;
} else{
    document.getElementById("inputOne").style.border = "red"
    document.getElementById("Result").innerHTML = "All filled Required"
}
}

function Subtract(){
    var InputeOne = +(document.getElementById("inputOne").value);
    var InputeTwo = +(document.getElementById("inputTwo").value);
    let Compute = (InputeOne - InputeTwo).toFixed(2);
    if(InputeOne !=" " && InputeTwo !=" " ){
    document.getElementById("Result").innerHTML = "The Result after Subtraction is " + Compute;
} else{
    document.getElementById("Result").innerHTML = "All filled Required"
}
}

function Divide(){
    var InputeOne = +(document.getElementById("inputOne").value);
    var InputeTwo = +(document.getElementById("inputTwo").value);
    let Compute = (InputeOne/InputeTwo).toFixed(2);
    if(InputeOne !=" " && InputeTwo !=" " ){
    document.getElementById("Result").innerHTML = "The Result after Division is " + Compute;
} else{
    document.getElementById("Result").innerHTML = "All filled Required"
}
}

function Multiply(){
    var InputeOne = +(document.getElementById("inputOne").value);
    var InputeTwo = +(document.getElementById("inputTwo").value);
    let Compute = (InputeOne * InputeTwo).toFixed(2);
    if(InputeOne !=" " && InputeTwo !=" " ){
    document.getElementById("Result").innerHTML = "The Result after Multiplication is  " + Compute;
} else{
    document.getElementById("Result").innerHTML = "All filled Required"
}
}

