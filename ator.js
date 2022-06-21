//ator
let yAtor = 366;
let xAtor = 85;
let colisao = false
let meusPontos = 0

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
}
function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 5)
    if (colisao){
      voltaAtor();
      if(meusPontos > 0){
        meusPontos -= 1
    }
    }
  }
}


function voltaAtor(){
  yAtor = 366;

}
function incluiPontos(){
   textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    voltaAtor();
  }
}
function podeSeMover(){
  return yAtor < 366;
}