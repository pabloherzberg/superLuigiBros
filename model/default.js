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
let chao = 300;
window.onmousemove = event =>{
    mouse.x = event.clientX;
    mouse.y = event.clientY;
}
//função clear
function limpar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}