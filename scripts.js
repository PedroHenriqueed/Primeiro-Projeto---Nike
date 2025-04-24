let body = document.querySelector("body");
let tenis = document.querySelector(".Tenis1");
let botao = document.querySelector(".botao-carrinho")
//document = html//
//querySelector  = pegador /selecionador//

function mudarVisual(cor, imagem) {
  tenis.classList.add("troca-efeito");
  body.style.background = cor;
  
  botao.style.background =cor;



setTimeout(() =>{
  tenis.src = imagem;
  tenis.classList.remove('troca-efeito')
},500);
} 

