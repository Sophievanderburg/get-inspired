
/* ---------  Variabelen  ---------*/
var blaadje1 = document.querySelector("main > img:nth-of-type(2)");
var blaadje2 = document.querySelector("main > img:nth-of-type(3)");
var blaadje3 = document.querySelector("main > img:nth-of-type(4)");
var blaadje4 = document.querySelector("main > img:nth-of-type(5)");
var blaadje5 = document.querySelector("main > img:last-of-type");


/* ---------  Functies  ---------*/
function wegBlaadje1(){
	blaadje1.classList.add("weg1");
}

function wegBlaadje2(){
	blaadje2.classList.add("weg2");
}

function wegBlaadje3(){
	blaadje3.classList.add("weg3");
}

function wegBlaadje4(){
	blaadje4.classList.add("weg4");
}

function wegBlaadje5(){
	blaadje5.classList.add("weg5");
}

/* ---------  Eventlisteners  ---------*/
blaadje1.addEventListener("mouseover", wegBlaadje1);
blaadje2.addEventListener("mouseover", wegBlaadje2);
blaadje3.addEventListener("mouseover", wegBlaadje3);
blaadje4.addEventListener("mouseover", wegBlaadje4);
blaadje5.addEventListener("mouseover", wegBlaadje5);