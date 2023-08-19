// código do ator
let xAtor = 110;
let yAtor = 350;
let colisao = false;
let meusPontos = 0;
let velocidadeAumentada = false;

function mostraAtor(){
  image(imagemAtor, xAtor, yAtor, 40, 40);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
        yAtor += -3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (podeSeMover()){
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)){
     xAtor -= 3;    
  }
  if (keyIsDown(RIGHT_ARROW)){
      xAtor += 3;    
  }
}

function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      voltaAtorPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos = 0;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 340;
}

function incluiPontos(){
  textSize(40);
  textAlign(CENTER);
  text(meusPontos, width / 12, 40);
  fill(255, 100, 0)
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos >= 0;
}

function podeSeMover(){
  return yAtor < 366;
}

function aumentaVelocidade1(){
  for (let i = 0; i < velocidadeCarros.length; i++){
      velocidadeCarros[i] += 1;
  }
  velocidadeAumentada = true;
}

function aumentaVelocidade2(){
  for (let i = 0; i < velocidadeCarros.length; i++){
      velocidadeCarros[i] *= 2;
  }
  velocidadeAumentada = true;
}

function aumentaVelocidade3(){
  for (let i = 0; i < velocidadeCarros.length; i++){
      velocidadeCarros[i] += 3;
  }
  velocidadeAumentada = true;
}

function restauraVelocidadesOriginais() {
  for (let i = 0; i < velocidadeCarros.length; i++){
    velocidadeCarros[i] = velocidadesOriginais[i];
  }
  velocidadeAumentada = false;
}

