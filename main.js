let txt_saludo = document.querySelector(".cambio_color");
let btn_saludo2 = document.querySelector(".btn1");
let btn_saludo3 = document.querySelector(".btn2");

function cambiar_dato(){
    txt_saludo.innerHTML = ' <div class="rojo"></div>';
}

function cambiar_dato2(){
    txt_saludo.innerHTML = '<div class="azul"></div>';
}


btn_saludo2.addEventListener("click",cambiar_dato);
btn_saludo3.addEventListener("click",cambiar_dato2);