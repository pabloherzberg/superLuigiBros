function controle(event){
    switch(event.keyCode){
        case 37: l.caminharEsquerda();
        break;
        case 38: l.olharCima();
        break;
        case 39: l.caminharDireita();
        break;
        case 40: l.abaixar();
        break; 
        case 32: l.pular();
        break;
    }
}

window.addEventListener('keydown', controle);
window.addEventListener('keyup', ()=>{
    l.parar()
});

let l = new Luigi();

