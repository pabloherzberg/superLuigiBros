    const body = document.querySelector('body')
    const canvas = document.querySelector('canvas')
    const bodyStyle = getComputedStyle(body)
    const width = bodyStyle.width
    const height = bodyStyle.height
    const w = width.split('px')[0]
    const h = height.split('px')[0]
    canvas.width = w;
    canvas.height = h;
    ctx = canvas.getContext('2d')
    let chao;
    let dX=0; //posição inicial
    function limpar(){
        ctx.clearRect(0,0,w,h)
        if(canvas.width<500){
            chao = canvas.height/3;
            setas(w,h)
            botoes(w,h)
        }
        if(canvas.width<=700){
            setas(w,h)
            botoes(w,h)
            chao = canvas.height - canvas.height/1.8;
        }
        if(canvas.width>=701){
            chao = canvas.height/2;
            ctx.font = '4vh Arial';
            ctx.fillText('Saltar: espaço, Girar: X', canvas.width/20, canvas.height/20);
            ctx.fillText('Setas para se movimentar. Pressione algum botão!', canvas.width/20, canvas.height/10);
        }
    }