const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const main = document.querySelector("main");

const images = [
  "./imgs/primeiraImagem.jpg",
  "./imgs/segundaImagem.jpg",
  "./imgs/terceiraImagem.jpg",
  "./imgs/quartaImagem.jpg",
  "./imgs/quintaImagem.jpg",
  "./imgs/sextaImagem.jpg",
];

setInterval(nextImage, 2500)

let imageAtual = 0;
const img = criarElemento("img", images[0]);

function criarElemento(elemento, valor) {
  const el = document.createElement(elemento);
  el.src = valor;

  return el;
}

function adicionandoAoCorpoDaPagina(el) {
  main.appendChild(el);
}

function nextImage() {
  imageAtual++;
  if (imageAtual >= images.length) {
    imageAtual = 0;
  }

  img.src = images[imageAtual];
}

function prevImage() {
  imageAtual--;
  if (imageAtual < 0) {
    imageAtual = images.length - 1;
  }
  img.src = images[imageAtual];
}

next.addEventListener("click", nextImage);
prev.addEventListener("click", prevImage);

adicionandoAoCorpoDaPagina(img);
