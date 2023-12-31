// imagens do jogo
let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;

// inserir imagens no jogo
function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage("imagens/ator-1.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro2, imagemCarro3, imagemCarro2, imagemCarro] // lista
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav")
}