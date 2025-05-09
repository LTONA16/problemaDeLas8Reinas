let contador = 0;
let imgSeleccionada = "";
let color = "#ff0000"; // Color por defecto

function actualizarImagen(){
    reina = document.getElementById("reina");
    imagen = reina.options[reina.selectedIndex].value;
    switch(imagen){
        case "Reina":
            imgSeleccionada = "img/reina.svg";
            limpiarImagen();
            mostarSolucion();
            break;
        case "Goofy":
            imgSeleccionada = "img/reina2.svg";
            limpiarImagen();
            mostarSolucion();
            break;
        case "Speedy":
            imgSeleccionada = "img/reina3.svg";
            limpiarImagen();
            mostarSolucion();
            break;
        default: limpiarImagen();
            imgSeleccionada = "";
            break;
    }
}

function mostarSolucion(){
    switch (document.getElementById("solucion").value) {
        case "Solución 1":
            limpiar();
            limpiarImagen();
            solucion1();
            break;
        case "Solución 2":
            limpiar();
            limpiarImagen();
            solucion2();
            break;
        case "Solución 3":
            limpiar();
            limpiarImagen();
            solucion3();
            break;
        default:
            limpiar();
            limpiarImagen();
            break;
    }
}

function mostarReina(celda){
    if(window.getComputedStyle(celda).backgroundImage=="none"){
        if(contador<8){
            celda.style = `
                        background-image:URL(${imgSeleccionada});
                        background-color:${color};
                        background-size:auto;
                        background-repeat:no-repeat;
                        background-position:center; 
                        `;
            contador++;
        }
    }else{
        celda.style = `background-image:none;
                       background-color:${color};`;
        contador--;
    }
}

function cambiarColor(r,c){
    let celda = document.getElementById("tablero")
    let r1 = r, c1 = c, r2 = r, c2 = c;
    let r3 = r, c3 = c, r4 = r, c4 = c;
    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor = color;
        celda.rows[i].cells[c].style.backgroundColor = color;

        if(r1<8 && c1<8){
            celda.rows[r1++].cells[c1++].style.backgroundColor = color;
        }

        if(r2<8 && c2>=0){
            celda.rows[r2++].cells[c2--].style.backgroundColor = color;
        }

        if(r3>=0 && c3>=0){
            celda.rows[r3--].cells[c3--].style.backgroundColor = color;
        }

        if(r4>=0 && c4<8){
            celda.rows[r4--].cells[c4++].style.backgroundColor = color;
        }
        
    }
}

function limpiar() { [...document.getElementsByTagName("td")].forEach(celda => celda.style.backgroundColor = ""); }

function limpiarImagen() { [...document.getElementsByTagName("td")].forEach(celda => celda.style.backgroundImage = "none"); }

function reiniciar(){
    limpiarImagen();
    limpiar();
    contador = 0;
    document.getElementById("reina").selectedIndex = 0;
    document.getElementById("solucion").selectedIndex = 0;
}

function solucion1(){
    contador = 8;
    let estilo = `background-image:URL(${imgSeleccionada}); background-color=${color}; background-size:auto; background-repeat:no-repeat; background-position:center; `;
    let celdas = document.getElementById("tablero");

    celdas.rows[0].cells[3].style = estilo;
    celdas.rows[1].cells[6].style = estilo;
    celdas.rows[2].cells[2].style = estilo;
    celdas.rows[3].cells[7].style = estilo;
    celdas.rows[4].cells[1].style = estilo;
    celdas.rows[5].cells[4].style = estilo;
    celdas.rows[6].cells[0].style = estilo;
    celdas.rows[7].cells[5].style = estilo;

}

function solucion2(){
    contador = 8;
    let estilo = `background-image:URL(${imgSeleccionada}); background-color=${color}; background-size:auto; background-repeat:no-repeat; background-position:center; `;
    let celdas = document.getElementById("tablero");

    celdas.rows[0].cells[4].style = estilo;
    celdas.rows[1].cells[6].style = estilo;
    celdas.rows[2].cells[0].style = estilo;
    celdas.rows[3].cells[3].style = estilo;
    celdas.rows[4].cells[1].style = estilo;
    celdas.rows[5].cells[7].style = estilo;
    celdas.rows[6].cells[5].style = estilo;
    celdas.rows[7].cells[2].style = estilo;
}


function solucion3(){
    contador = 8;
    let estilo = `background-image:URL(${imgSeleccionada}); background-color=${color}; background-size:auto; background-repeat:no-repeat; background-position:center; `;
    let celdas = document.getElementById("tablero");

    celdas.rows[0].cells[1].style = estilo;
    celdas.rows[1].cells[3].style = estilo;
    celdas.rows[2].cells[5].style = estilo;
    celdas.rows[3].cells[7].style = estilo;
    celdas.rows[4].cells[2].style = estilo;
    celdas.rows[5].cells[0].style = estilo;
    celdas.rows[6].cells[6].style = estilo;
    celdas.rows[7].cells[4].style = estilo;
}


window.addEventListener('DOMContentLoaded', () => {
    actualizarImagen();
    limpiarImagen();
    limpiar();
    const colorPicker = document.getElementById('colorPicker');

    // Solo si existen los elementos
    if (colorPicker) {
        colorPicker.addEventListener('input', (e) => {
            color = e.target.value;
        });
        colorPicker.value = color;
        colorPicker.dispatchEvent(new Event('input'));
    }

    document.getElementById('reina').selectedIndex = 0;
    document.getElementById('solucion').selectedIndex = 0;
});