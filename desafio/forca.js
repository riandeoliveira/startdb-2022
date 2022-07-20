const Boneco = require("./boneco");

// Instância do objeto boneco
const boneco = new Boneco();

class Forca {
  // Recebe a palavra secreta durante a instância da classe para iniciar o jogo
  constructor(palavraSecreta) {
    this.letrasChutadas = []; // Contém todas as letras chutadas
    this.vidas = 6; // Quantidade de vidas restantes. Começa com 6
    this.palavraSecreta = [...palavraSecreta]; // Divide cada letra da palavra secreta em um array
    this.palavra = this.palavraSecreta.map(() => "_"); // Array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }

  // Chuta uma letra inserida pelo usuário
  chutar(letra) {
    const chuteValido = this.validarChute(letra);

    const letraChutada = letra.toLowerCase();

    // Verifica se o chute é válido para que o jogo possa continuar
    if (chuteValido) {
      this.letrasChutadas.push(letraChutada);

      // Verifica se a letra chutada faz parte da palavra secreta
      if (this.palavraSecreta.includes(letraChutada)) {
        this.acertar(letraChutada);
      } else this.errar(letraChutada);
    }
  }

  // Faz verificações na letra chutada, retorna false se for uma letra inválida e true se for válida
  validarChute(letra) {
    if (letra.length >= 2) {
      console.log("Por favor, digite uma letra por vez");

      this.aguardar();

      return false;
    }

    if (!letra.match(/[a-z]/i)) {
      console.log("Por favor, digite uma letra válida");

      this.aguardar();

      return false;
    }

    if (this.letrasChutadas.includes(letra)) {
      console.log("Você já chutou esta letra, tente uma letra diferente");

      this.aguardar();

      return false;
    }

    return true;
  }

  // Confirma o acerto do jogador
  acertar(letraCorreta) {
    // Procura a posição correspondente da palavra para trocar o valor "_" pela letra correta
    this.palavraSecreta.map((letra, i) => {
      if (letra === letraCorreta) {
        this.palavra[i] = letraCorreta;
      }
    });

    console.log(`A letra ${letraCorreta} foi encontrada na palavra secreta :)`);

    this.aguardar();
  }

  // Confirma o erro do jogador, diminuindo uma vida
  errar(letraIncorreta) {
    this.vidas--;

    boneco.atualizarPeloIndice(this.vidas);

    console.log(
      `Que pena, a letra ${letraIncorreta} não existe na palavra secreta :(`
    );

    this.aguardar();
  }

  // Aguarda um determinado tempo em segundos para a exibição de mensagens no console
  aguardar() {
    const tempoSegundos = 2000;

    let data = Date.now();
    let dataAtual = null;

    do dataAtual = Date.now();
    while (dataAtual - data < tempoSegundos);
  }

  // Busca o estado atual do jogo. Possíveis valores: "ganhou", "perdeu" e "aguardando chute"
  buscarEstado() {
    if (this.palavra.join("") === this.palavraSecreta.join("")) {
      return "ganhou";
    } else if (this.vidas <= 0) {
      return "perdeu";
    }

    return "aguardando chute";
  }

  // Exibe os dados atuais do jogo com formatação em uma tabela
  buscarDadosDoJogo() {
    console.clear();

    return `
+---------------------+
|    JOGO DA FORCA    |
+---------------------+

${boneco.exibir()}

+---------------------+
| DADOS DO JOGO
|
| Letras chutadas: ${this.letrasChutadas}
| Vidas restantes: ${this.vidas}
| Palavra: ${this.palavra.toString().replace(/,/g, "")}
|
| ${this.buscarEstado()}
+---------------------+
`;
  }

  // Busca os dados do jogo e os exibe de forma pura. Use este método para debug no arquivo "desafio.js"
  buscarDadosPurosDoJogo() {
    console.clear();

    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavraSecreta: this.palavraSecreta,
      palavra: this.palavra,
    };
  }
}

module.exports = Forca;
