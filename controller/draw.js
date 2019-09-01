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
touchVertical={
    left:false,
    right:false,
    up:false,
    down:false,
    space:false,
    x:false,
    alterarStatus: event =>{
        let status = (event)?true:false;
        switch(event){
            case (mouse.x<58 && 511<mouse.y<568)://left
            controle.left = status;
            break;
            case (58<mouse.x<122 && 511<mouse.y<452)://up
            controle.up = status;
            break;
            case (122<mouse.x<172 && 511<mouse.y<568)://right
            controle.right = status;
            break;
            case (58<mouse.x<122 && 568<mouse.y<624)://down
            controle.down = status;
            break; 
            case (256<mouse.x<320 && 565<mouse.y<614 || 215<mouse.x<256 && 517<mouse.y<565)://space
            controle.space = status;
            break;
            case (256<mouse.x<320 && 472<mouse.y<517 || 320<mouse.x<539 && 517<mouse.y<565):
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
window.addEventListener('touchstart', touchVertical.alterarStatus);
window.addEventListener('keyup', controle.alterarStatus);
window.addEventListener('touchend', touchVertical.alterarStatus);