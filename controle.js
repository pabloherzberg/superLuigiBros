function setas(larguraTela, alturaTela, buttonPress=false){
    if(screen.orientation.angle==90){   //tela deitada
        if(buttonPress=='left'){
            let size = alturaTela/7
            ctx.save()
            ctx.fillStyle='black'
            ctx.fillRect(0, alturaTela-size*2, size*.925, size*.925) //esquerda
            ctx.restore()            
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo            
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
        }
        if(buttonPress=='right'){
            let size = alturaTela/7
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda            
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo
            ctx.fillStyle='black'            
            ctx.fillRect(size*2,alturaTela-size*2,size*.925,size*.925)//direita  
            ctx.restore()          
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
        }
        if(buttonPress=='up'){
            let size = alturaTela/7
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda           
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo           
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita
            ctx.fillStyle='black'           
            ctx.fillRect(size, alturaTela-size*3,size*.925,size*.925)//cima
            ctx.restore()
        }
        if(buttonPress=='down'){
            let size = alturaTela/7
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda 
            ctx.fillStyle='black'          
            ctx.fillRect(size, alturaTela-size,size*.925, size*.925) //baixo   
            ctx.restore()        
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
            ctx.restore()
        }
        if(buttonPress==false){
            let size = alturaTela/7
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda           
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo           
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
            ctx.restore()
        }
        
    }else{                              //tela em pé
        if(buttonPress=='left'){
            let size = alturaTela/10
            ctx.save()
            ctx.fillStyle='black'
            ctx.fillRect(0, alturaTela-size*2, size*.925, size*.925) //esquerda
            ctx.restore()            
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo            
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
        }
        if(buttonPress=='right'){
            let size = alturaTela/10
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda            
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo
            ctx.fillStyle='black'            
            ctx.fillRect(size*2,alturaTela-size*2,size*.925,size*.925)//direita  
            ctx.restore()          
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
        }
        if(buttonPress=='up'){
            let size = alturaTela/10
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda           
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo           
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita
            ctx.fillStyle='black'           
            ctx.fillRect(size, alturaTela-size*3,size*.925,size*.925)//cima
            ctx.restore()
        }
        if(buttonPress=='down'){
            let size = alturaTela/10
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda 
            ctx.fillStyle='black'          
            ctx.fillRect(size, alturaTela-size,size*.925, size*.925) //baixo   
            ctx.restore()        
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
            ctx.restore()
        }
        if(buttonPress==false){
            let size = alturaTela/10
            ctx.save()
            ctx.strokeRect(0, alturaTela-size*2, size, size) //esquerda           
            ctx.strokeRect(size, alturaTela-size,size, size) //baixo           
            ctx.strokeRect(size*2,alturaTela-size*2,size,size)//direita           
            ctx.strokeRect(size, alturaTela-size*3,size,size)//cima
            ctx.restore()
        }
    }
}
function botoes(larguraTela,alturaTela, buttonPress=false){
    if(screen.orientation.angle==90){                   //tela deitada
        if(buttonPress=='red'){
            let raio = alturaTela/12
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle='red'
            ctx.arc(larguraTela-raio*2,alturaTela-raio*3.5,raio*.925,0,Math.PI*2) //botao vermelho
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle='green'
            ctx.arc(larguraTela-raio*5,alturaTela-raio*1.5,raio,0,Math.PI*2) //botao verde
            ctx.fill()
            ctx.closePath()
            ctx.restore()
        }
        if(buttonPress=='green'){
            let raio = alturaTela/12
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle='red'
            ctx.arc(larguraTela-raio*2,alturaTela-raio*3.5,raio,0,Math.PI*2) //botao vermelho
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle='green'
            ctx.arc(larguraTela-raio*5,alturaTela-raio*1.5,raio*.925,0,Math.PI*2) //botao verde
            ctx.fill()
            ctx.closePath()
            ctx.restore()
        }
        if(buttonPress ==false){
            let raio = alturaTela/12
            ctx.save()
            ctx.beginPath()
            ctx.fillStyle='red'
            ctx.arc(larguraTela-raio*2,alturaTela-raio*3.5,raio,0,Math.PI*2) //botao vermelho
            ctx.fill()
            ctx.closePath()
            ctx.beginPath()
            ctx.fillStyle='green'
            ctx.arc(larguraTela-raio*5,alturaTela-raio*1.5,raio,0,Math.PI*2) //botao verde
            ctx.fill()
            ctx.closePath()
            ctx.restore()
        }
    }else{
        let raio = alturaTela/18
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle='red'
        ctx.arc(larguraTela-raio*1.5,alturaTela-raio*4.5,raio,0,Math.PI*2) //botao vermelho
        ctx.fill()
        ctx.closePath()
        ctx.beginPath()
        ctx.fillStyle='green'
        ctx.arc(larguraTela-raio*2.5,alturaTela-raio*2,raio,0,Math.PI*2) //botao verde
        ctx.fill()
        ctx.closePath()
        ctx.restore()
    }
}