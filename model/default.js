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
let chao = canvas.height/2+10;
window.onmousemove = event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
//função clear
function limpar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.font = '30px Arial';
    ctx.fillText('Saltar: espaço, Girar: X', canvas.width/2-80, 30);
    ctx.fillText('Para começar tente se movimentar usando as setas do teclado', canvas.width/4-80,60);
}