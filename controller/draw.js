controle={
    left:false,
    right:false,
    up:false,
    down:false,
    space:false,
    x:false,
    alterarStatus: event =>{
        let status = (event.type =='keydown')?true:false;
        switch(event.keyCode){
            case 37://left
            controle.left = status;
            break;
            case 38://up
            controle.up = status;
            break;
            case 39://right
            controle.right = status;
            break;
            case 40://down
            controle.down = status;
            break; 
            case 32://space
            controle.space = status;
            break;
            case 88:
            controle.x = status;
            break;
        };
        loop();
    }
}

let l = new Luigi();
l.parar();
let loop= ()=>{
    switch(true){
        case (controle.right):
            l.caminharDireita();
            break;
        case (controle.left):
            l.caminharEsquerda();
            break;
        case (controle.up):
            l.olharCima();
            break;
        case (controle.down):
            l.abaixar();
            break;
        case (controle.space):
            l.pular();
            break;
        case (controle.x):
            l.girar();
            break;
        default:
            l.parar();
            break;
    }
}
window.addEventListener('keydown', controle.alterarStatus);
window.addEventListener('keyup', controle.alterarStatus);