function iniciar(){
     //cria controle de objetos
    limpar()
    //instanciar
    let l = new Luigi(chao);
    l.parar();
    controleTouchObj = {
        statusFunction: event =>{
            //captura toque nos eixos x e y
            let xTouch1 = event.touches[0].clientX
            let yTouch1 = event.touches[0].clientY
            //definir proporções
            let raio = h/12   //das elipses
            let size = h/7    //dos retangulos
            //limites botão A
            let limiteEsquerdoA = w-raio*3
            let limiteDireitoA = limiteEsquerdoA+raio*2
            let limiteSuperiorA = h-raio*3.5-raio
            let limiteInferiorA = limiteSuperiorA+raio*2
            let botaoA = limiteEsquerdoA<xTouch1 && xTouch1<limiteDireitoA && limiteSuperiorA<yTouch1 && yTouch1<limiteInferiorA
            //limites botão B
            let limiteEsquerdoB = w-raio*6
            let limiteDireitoB = limiteEsquerdoB+raio*2
            let limiteSuperiorB = h-raio*1.5-raio
            let limiteInferiorB = limiteSuperiorB+raio*2
            let botaoB = limiteEsquerdoB<xTouch1 && xTouch1<limiteDireitoB && limiteSuperiorB<yTouch1 && yTouch1<limiteInferiorB
            //limites seta esquerda
            let limiteEsquerdoSetaL = 0
            let limiteDireitoSetaL = size
            let limiteSuperiorSetaL =h-size*2
            let limiteInferiorSetaL = limiteSuperiorSetaL+size
            let setaLeft = limiteEsquerdoSetaL<xTouch1 && xTouch1<limiteDireitoSetaL && limiteSuperiorSetaL<yTouch1 && yTouch1<limiteInferiorSetaL
            //limites seta direita
            let limiteEsquerdoSetaR = size*2
            let limiteDireitoSetaR = limiteEsquerdoSetaR+size
            let limiteSuperiorSetaR =h-size*2
            let limiteInferiorSetaR = limiteSuperiorSetaL+size
            let setaRight = limiteEsquerdoSetaR<xTouch1 && xTouch1<limiteDireitoSetaR && limiteSuperiorSetaR<yTouch1 && yTouch1<limiteInferiorSetaR
            //limites seta cima  ajustar
            let limiteEsquerdoSetaUp = size
            let limiteDireitoSetaUp = limiteEsquerdoSetaUp+size
            let limiteSuperiorSetaUp =h-size*3
            let limiteInferiorSetaUp = limiteSuperiorSetaUp+size
            let setaUp = limiteEsquerdoSetaUp<xTouch1 && xTouch1<limiteDireitoSetaUp && limiteSuperiorSetaUp<yTouch1 && yTouch1<limiteInferiorSetaUp
            //limites seta baixo
            let limiteEsquerdoSetaDown = size
            let limiteDireitoSetaDown = limiteEsquerdoSetaDown+size
            let limiteSuperiorSetaDown =h-size
            let limiteInferiorSetaDown = limiteSuperiorSetaDown+size
            let setaDown = limiteEsquerdoSetaDown<xTouch1 && xTouch1<limiteDireitoSetaDown && limiteSuperiorSetaDown<yTouch1 && yTouch1<limiteInferiorSetaDown
            //teste de botões acionados
            if(setaUp){
                l.olharCima()
                setas(w,h,'up')
                botoes(w,h)
            }
            if(setaDown){
                l.abaixar()
                setas(w,h,'down')
                botoes(w,h)
            }
            if(setaLeft){
                l.caminharEsquerda()
                setas(w,h,'left')
                botoes(w,h)
            }
            if(setaRight){
                l.caminharDireita()
                setas(w,h,'right')
                botoes(w,h)   
            }
            if(botaoB){
                l.pular()
                botoes(w,h,'green')
                setas(w,h)
            }
            if(botaoA){
                l.girar()
                botoes(w,h,'red')
                setas(w,h)
            }
        }     
    }
    controleKeyboardObj={
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
                controleKeyboardObj.left = status;
                break;
                case 38://up
                controleKeyboardObj.up = status;
                break;
                case 39://right
                controleKeyboardObj.right = status;
                break;
                case 40://down
                controleKeyboardObj.down = status;
                break; 
                case 32://space
                controleKeyboardObj.space = status;
                break;
                case 88:
                controleKeyboardObj.x = status;
                break;
            };
            loop();
        }
    }
    //inserir ouvinte de touch screen e chamar função de controle
    window.addEventListener('touchstart', controleTouchObj.statusFunction)
    //inserir ouvinte de fim de toque e limpar o canvas
    window.addEventListener('touchend',()=>{
        limpar()
        botoes(w,h)
        setas(w,h)
        l.parar()
    })
    //inserir ouvite de tecla pressionada
    window.addEventListener('keydown', controleKeyboardObj.alterarStatus);
    //inserir evento de tecla sem pressionar
    window.addEventListener('keyup', controleKeyboardObj.alterarStatus);
    //evento de desenho
    let loop= ()=>{
        switch(true){
            case (controleKeyboardObj.right):
                l.caminharDireita();
                break;
            case (controleKeyboardObj.left):
                l.caminharEsquerda();
                break;
            case (controleKeyboardObj.up):
                l.olharCima();
                break;
            case (controleKeyboardObj.down):
                l.abaixar();
                break;
            case (controleKeyboardObj.space):
                l.pular();
                break;
            case (controleKeyboardObj.x):
                l.girar();
                break;
            default:
                l.parar();
                break;
        }
    }

}

window.onload = iniciar()
window.onresize =()=>iniciar()

