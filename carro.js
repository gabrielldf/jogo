//carros

let xCarros = [600, 600, 600,600,600,600];
let yCarros = [40, 96, 150, 210, 270, 318]; 
let velocidadeCarros = [3, 2.5, 2.9, 5, 3.4, 2.3];
let comprimentoCarro = 50
let alturaCarro = 40

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i = i+1)
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  
}

function movimentaCarro(){
  for(let w = 0; w < imagemCarros.length; w = w+1)
  xCarros[w] -= velocidadeCarros[w];
  
}

function voltaCarro() {
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        if(passouTodaATela(xCarros[i])){
                xCarros[i] = 600;
        }
    }
}

function passouTodaATela(xCarro){
    return xCarro < - 50;
}


