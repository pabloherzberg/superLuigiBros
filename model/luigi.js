function Luigi(dX=0, dY=chao){
    let sX, sY, sWidth, sHeight, dWidth, dHeight;
    //declaração de posições iniciais
    sX = 234;
    sY = 116;
    sWidth = 16;
    sHeight = 30;
    dWidth = sWidth*2.5;
    dHeight = sHeight*2.5;   
    yVelocidade = 20;
    let registro;
    //instanciar objeto imagem
    let img = new Image();
    img.src = './model/img/luigi.png';
    //funções de movimento
    this.caminharDireita = ()=>{
        //sprites da caminhada nas posições 234,264,294
        if(sX == 234){
            sX = 264;
        }else{
            if(sX == 264){
                sX = 294;
            }else{
                sX = 234;
            }
        }
        //caminhar até o canto da tela
        if(dX < canvas.width){
            dX+=10;
        }
        limpar();
        ctx.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
        registro ='direita';  
        console.log(registro);
    }
    this.caminharEsquerda = ()=>{
        //sprites da caminhada nas posições 234,264,294
        if(sX == 199){
            sX = 168;
        }else{
            if(sX == 168){
                sX = 138;
            }else{
                sX = 199;
            }
        }
        //caminhar até o centro da tela
        if(dX > 0){
            dX-=10;
        }
        limpar();
        ctx.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);  
        registro = 'esquerda';
        console.log(registro)
    }
    this.pular = ()=>{
        console.log(yVelocidade)
        limpar();
        dY -=yVelocidade;
        yVelocidade--;
        //define lado do pulo
        if(yVelocidade < 0){ //subindo
            if(registro == 'direita'){             // direita
                sX = 264;
                sY = 157;
                dX+=3;
            }else{                                  //esquerda
                sX = 198;
                sY = 156;
                dX-=3;
            }
        }else{              //descendo
            if(registro =='direita'){               //direita
                sX = 234;
                sY = 156;
                dX+=3;
            }else{                                  //esquerda
                sX = 168;
                sY = 157;
                dX-=3;
            }             
        }
        ctx.drawImage(img, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight);
        //se chegar ao chão        
        if(dY==300){
            sY = 116;
            yVelocidade = 20;  
            clearTimeout(this.pular);
            this.parar();
        }else{
            setTimeout(this.pular, 20);
        }
    }  
    this.olharCima = ()=>{
        limpar();
        if(registro =='direita'){
            sX = 348;
        }else{
            sX = 85;
        }
        ctx.drawImage(img, sX, 156, sWidth, sHeight, dX, dY, dWidth, dHeight);
    }
    this.parar = ()=>{
        limpar();
        if(registro =='direita'){
            sX = 234;
            sY = 116;
        }else{
            sX = 199;
            sY = 116;
        }
        ctx.drawImage(img, sX, 116, sWidth, sHeight, dX, dY, dWidth, dHeight);
        console.log('parado');
    }
    this.abaixar = ()=>{
        limpar();
        if(registro =='direita'){
            sX = 321;
            sY = 163;
        }else{
            sX = 111;
            sY = 163;
        }
        ctx.drawImage(img, sX, 156, sWidth, sHeight, dX, dY+20, dWidth, dHeight);
    }
}
