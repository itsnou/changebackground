let css=document.querySelector("h3")
let color1=document.querySelector(".color1")
let color2=document.querySelector(".color2")
let body=document.getElementById("gradient");
let button= document.getElementById("random")

body.style.background= "linear-gradient(to right, " + color1.value + ", " + color2.value + ")"

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")"
    
    css.textContent = body.style.background + ";";
}

// GENERADOR DE HEXADECIMAL
function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
     let coolor= "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
     return coolor;
}

function randomBtn(){
    color1= colorRGB();
    color2= colorRGB();

    css.textContent = body.style.background + ";";
    body.style.background= "linear-gradient(to right, rgb" + color1 + ", rgb" + color2 + ")"
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", randomBtn)

