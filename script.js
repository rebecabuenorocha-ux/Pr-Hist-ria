
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: #292344;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

header {
  color: white;
  text-shadow: 1px 2px 4px #574477;
  margin-bottom: 25px;
}

h1 {
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: 8px;
}

.painel {
  background: white;
  padding: 30px 20px;
  border-radius: 22px;
  box-shadow: 0 8px 20px #59447740;
}

button {
  background: #ffca3a;
  color: #33264d;
  border: none;
  border-radius: 12px;
  padding: 14px 22px;
  margin: 12px 5px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s;
}

button:hover {
  background: #ffb703;
  transform: scale(1.04);
}

.escondido {
  display: none !important;
}

.pontuacao {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 15px;
}

.pontuacao span {
  background: white;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 3px 8px #00000012;
}

#mensagem {
  font-weight: bold;
  margin: 20px 0;
}

.tabuleiro {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin: 20px auto;
}

.carta {
  min-height: 105px;
  padding: 8px;
  background: #6c63ff;
  color: white;
  border: 3px solid white;
  border-radius: 16px;
  font-size: 2rem;
  box-shadow: 0 4px 7px #00000020;
  overflow-wrap: anywhere;
}

.carta.aberta {
  background: #ffffff;
  color: #30234a;
  border-color: #6c63ff;
}

.carta.certa {
  background: #b7f7c1;
  color: #174b2a;
  border-color: #42b963;
  cursor: default;
}

@media (max-width: 480px) {
  body {
    padding: 12px;
  }

  .tabuleiro {
    gap: 6px;
  }

  .carta {
    min-height: 78px;
    font-size: 1.5rem;
    padding: 4px;
  }

  .pontuacao {
    gap: 6px;
  }

  .pontuacao span {
    padding: 9px;
    font-size: 0.9rem;
  }
}

