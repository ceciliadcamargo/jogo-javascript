// criando listas
let xCarros = [520, 520, 520, 520]
let yCarros = [260, 96, 150, 210]
let velocidadeCarros = [1, 3, 2, 2.5]
let velocidadesOriginais = [1, 3, 2, 2.5]
let comprimentoCarro = 60;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
    if (meusPontos == 1 && !velocidadeAumentada){
      aumentaVelocidade1();
    }
    if (meusPontos == 2 && !velocidadeAumentada){
      aumentaVelocidade2();
    }
    if (meusPontos == 3 && !velocidadeAumentada){
      aumentaVelocidade3();
    }
    if (meusPontos == 0 && velocidadeAumentada) {
        restauraVelocidadesOriginais();
    }
  }
}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < -50;
}