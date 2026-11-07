class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia"
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

function iniciarBatalha(herois) {
  for (const heroi of herois) {
    herois.atacar();
  }
}

const equipeHerois = [
  new Heroi("Arthur", 30, "guerreiro"),
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Aang", 112, "monge"),
  new Heroi("Hanzo", 28, "ninja")
];

iniciarBatalha(equipeHerois);
