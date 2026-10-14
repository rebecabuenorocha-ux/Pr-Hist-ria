
const inicio = document.getElementById("inicio");
const jogo = document.getElementById("jogo");
const fim = document.getElementById("fim");
const tabuleiro = document.getElementById("tabuleiro");
const mensagem = document.getElementById("mensagem");

const pontosTexto = document.getElementById("pontos");
const acertosTexto = document.getElementById("acertos");
const errosTexto = document.getElementById("erros");

const perguntas = [
  { par: "matematica", emoji: "➕", texto: "Matemática" },
  { par: "portugues", emoji: "📚", texto: "Português" },
  { par: "ciencias", emoji: "🔬", texto: "Ciências" },
  { par: "historia", emoji: "🏛️", texto: "História" },
  { par: "geografia", emoji: "🌎", texto: "Geografia" },
  { par: "arte", emoji: "🎨", texto: "Arte" },
  { par: "ingles", emoji: "🔤", texto: "Inglês" },
  { par: "educacao", emoji: "⚽", texto: "Educação Física" }
];

let primeira = null;
let segunda = null;
let bloqueado = false;
let pontos = 0;
let acertos = 0;
let erros = 0;
let paresEncontrados = 0;
let rodada = 0;
let temporizador;

document.getElementById("iniciar").addEventListener("click", iniciar);
document.getElementById("reiniciar").addEventListener("click", iniciar);
document.getElementById("jogarNovamente").addEventListener("click", iniciar);

function iniciar() {
  clearTimeout(temporizador);
  rodada++;

  primeira = null;
  segunda = null;
  bloqueado = false;
  pontos = 0;
  acertos = 0;
  erros = 0;
  paresEncontrados = 0;

  atualizarPlacar();

  inicio.classList.add("escondido");
  fim.classList.add("escondido");
  jogo.classList.remove("escondido");

  mensagem.textContent =
    "Encontre os pares de cartas iguais!";

  tabuleiro.innerHTML = "";

  const cartas = [...perguntas, ...perguntas]
    .sort(() => Math.random() - 0.5);

  cartas.forEach((item) => {
    const carta = document.createElement("button");

    carta.className = "carta";
    carta.textContent = "❓";
    carta.dataset.par = item.par;
    carta.dataset.emoji = item.emoji;
    carta.dataset.texto = item.texto;
    carta.setAttribute("aria-label", "Carta fechada");

    carta.addEventListener("click", () => virarCarta(carta));

    tabuleiro.appendChild(carta);
  });
}

function virarCarta(carta) {
  if (
    bloqueado ||
    carta.classList.contains("aberta") ||
    carta.classList.contains("certa")
  ) {
    return;
  }

  carta.classList.add("aberta");
  carta.textContent = carta.dataset.emoji;
  carta.setAttribute("aria-label", carta.dataset.texto);

  if (!primeira) {
    primeira = carta;
    mensagem.textContent = "Escolha mais uma carta!";
    return;
  }

  segunda = carta;

  if (primeira.dataset.par === segunda.dataset.par) {
    primeira.classList.add("certa");
    segunda.classList.add("certa");

    primeira.classList.remove("aberta");
    segunda.classList.remove("aberta");

    pontos += 10;
    acertos++;
    paresEncontrados++;

    mensagem.textContent = "🎉 Muito bem! Você encontrou um par!";
    primeira = null;
    segunda = null;

    atualizarPlacar();

    if (paresEncontrados === perguntas.length) {
      const rodadaAtual = rodada;

      temporizador = setTimeout(() => {
        if (rodadaAtual === rodada) finalizar();
      }, 700);
    }
  } else {
    erros++;
    pontos = Math.max(0, pontos - 2);
    bloqueado = true;

    mensagem.textContent = "Ops! Tente novamente! 💪";
    atualizarPlacar();

    const rodadaAtual = rodada;

    temporizador = setTimeout(() => {
      if (rodadaAtual !== rodada) return;

      primeira.classList.remove("aberta");
      segunda.classList.remove("aberta");

      primeira.textContent = "❓";
      segunda.textContent = "❓";

      primeira.setAttribute("aria-label", "Carta fechada");
      segunda.setAttribute("aria-label", "Carta fechada");

      primeira = null;
      segunda = null;
      bloqueado = false;

      mensagem.textContent = "Escolha duas cartas!";
    }, 900);
  }
}

function atualizarPlacar() {
  pontosTexto.textContent = pontos;
  acertosTexto.textContent = acertos;
  errosTexto.textContent = erros;
}

function finalizar() {
  jogo.classList.add("escondido");
  fim.classList.remove("escondido");

  document.getElementById("resultado").textContent =
    `Você encontrou todos os ${perguntas.length} pares! ` +
    `Sua pontuação foi ${pontos} pontos, com ${acertos} acertos ` +
    `e ${erros} erros. Parabéns pelo esforço! 🌟`;
}

