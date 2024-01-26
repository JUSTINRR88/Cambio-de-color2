
let btn1_azul = document.querySelector(".btn1");
let btn2_rojo = document.querySelector(".btn2");
let cambio_color = document.querySelector(".cambio");

function cambio(){
    cambio_color.innerHTML = '<div class="azul"></div>';
}

function cambio2(){
    cambio_color.innerHTML = '<div class="rojo"></div>';
}


btn1_azul.addEventListener("click", cambio);

btn2_rojo.addEventListener("click", cambio2);



