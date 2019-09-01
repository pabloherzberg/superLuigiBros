//definir propriedades do canvas
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const s = getComputedStyle(canvas);     
let w = s.width;
let h = s.height;
canvas.width = w.split('px')[0];
canvas.height = h.split('px')[0];
//pegar posição do mouse
let mouse = {x: 0, y: 0};
window.onmousemove = event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(`x:${mouse.x} y:${mouse.y}`);
}
//função clear
    //limites
    let chao;
    let dX=0; //posição inicial
    ////////////
if(canvas.width<500){
    chao = canvas.height/3;
}
if(canvas.width<=700){
    chao = canvas.height - canvas.height/1.8;
}
if(canvas.width>=701){
    chao = canvas.height/2;
    ctx.font = '4vh Arial';
    ctx.fillText('Saltar: espaço, Girar: X', canvas.width/20, canvas.height/20);
    ctx.fillText('Setas para se movimentar. Pressione algum botão!', canvas.width/20, canvas.height/10);
}
function limpar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if(canvas.width<500){
        chao = canvas.height/3;
    }
    if(canvas.width<=700){
        chao = canvas.height - canvas.height/1.8;
    }
    if(canvas.width>=701){
        chao = canvas.height/2;
        ctx.font = '4vh Arial';
        ctx.fillText('Saltar: espaço, Girar: X', canvas.width/20, canvas.height/20);
        ctx.fillText('Setas para se movimentar. Pressione algum botão!', canvas.width/20, canvas.height/10);
    }
}