/*
Write three functions: 
one to square a number, another to double it, and a third to calculate its cube. 
Get a number and operator from the user and calculate the number based on the operator.(^=square, **=double, ***=cube)
- squareNumber(3, ‘^’) = 9		
- squareNumber(3, ‘**’) = 6	
- cubeNumber(3, ‘***’) = 27
// */


function varieble (valume) {

    if (valume==="^") {
        let value = prompt("please give me a number") 
        let morteza = value**2;
        alert(`your answer is ${morteza}`)
    }

    if (valume==="**") {
        let value = prompt("please give me a number")
        let morteza = value*2;
        alert(`your answer is ${morteza}`)
    }

    if (valume==="***") {
        let value = prompt("please give me a number")
        let morteza = Math.pow(value, 3);
        alert(`your answer is ${morteza}`)
    }
}

varieble(prompt("please give me a simbol"))
