// Classe para guardar modelos de diferentes bonecos para exibição durante o jogo

class Boneco {
  constructor() {
    // Estado atual do boneco. Começa zerado
    this.corpo = `


+----------+
|          |
|
|
|
|
|
+---------------------+`;

    // Array com todos os estados possíveis do boneco
    this.partesCorpo = [
      `
                +------------------+
                |       .....      |
+----------+    +------------------+
|          |   /
|        (x_x)
|         /|\\
|          |
|         / \\
|
+---------------------+`,
      `
                +------------------+
                | Por favor, eu... |
+----------+    +------------------+
|          |   /
|        (-_-)
|         /|\\
|          |
|         /
|
+---------------------+`,
      `
                +------------------+
                |    Socorro!!!    |
+----------+    +------------------+
|          |   /
|        (;_;)
|         /|\\
|          |
|
|
+---------------------+`,
      `
                +------------------+
                |     Depressa!    |
+----------+    +------------------+
|          |   /
|        (O_O)
|         /|
|          |
|
|
+---------------------+`,
      `
                +------------------+
                |  Me tire daqui!  |
+----------+    +------------------+
|          |   /
|        (o_O)
|          |
|          |
|
|
+---------------------+`,
      `
                +------------------+
                |   O que é isso?  |
+----------+    +------------------+
|          |   /
|        (o_o)
|
|
|
|
+---------------------+`,
    ];
  }

  // Atualiza o estado atual de acordo com o índice, no caso, a quantidade de vidas do jogador
  atualizarPeloIndice(indice) {
    this.corpo = this.partesCorpo[indice];
  }

  // Retorna o boneco para exibição na classe Forca
  exibir() {
    return this.corpo;
  }
}

module.exports = Boneco;
