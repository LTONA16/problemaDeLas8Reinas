let contador = 0;
function mostarReina(celda){
    if(window.getComputedStyle(celda).backgroundImage=="none"){
        if(contador<8){
            celda.style = `
                        background-image:URL(img/reina.svg);
                        background-size:50px;
                        background-repeat:no-repeat;
                        background-position:center; 
                        `;
            contador++;
        }
    }else{
        celda.style = `background-image:none;`;
        contador--;
    }
}

function cambiarColor(r,c){
    let celda = document.getElementById("tablero")
    let r1 = r, c1 = c, r2 =r, c2 = c;
    let r3 = r, c3=c, r4 = r, c4 = c;
    for (let i = 0; i < 8; i++) {
        celda.rows[r].cells[i].style.backgroundColor="red";
        celda.rows[i].cells[c].style.backgroundColor="red";
    }
}

function limpiar(){
    
}