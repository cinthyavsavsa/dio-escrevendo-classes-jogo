# 🎮 Desafio DIO: Escrevendo as Classes de um Jogo

Projeto desenvolvido como parte do bootcamp da [Digital Innovation One (DIO)](https://www.dio.me/), focado no aprendizado prático de **Programação Orientada a Objetos (POO)** com JavaScript.

---

## 📌 Objetivo do Desafio

Criar uma classe genérica que represente um herói em uma jornada de aventura com atributos específicos e um método dinâmico de ataque.

### Propriedades da Classe:
- **nome** (ex: "Arthur")
- **idade** (ex: 30)
- **tipo** (ex: "guerreiro", "mago", "monge", "ninja")

### Regra do Método `atacar()`:
O método exibe no console a mensagem:
> `"o {tipo} atacou usando {ataque}"`

Conforme a correspondência entre tipo e ataque:

| Tipo | Ataque |
| :--- | :--- |
| **mago** | magia |
| **guerreiro** | espada |
| **monge** | artes marciais |
| **ninja** | shuriken |

---

## 🛠️ Tecnologias e Conceitos Aplicados

- **JavaScript (ES6+)**
- **Classes e Instanciação de Objetos** (`class`, `constructor`, `new`)
- **Estruturas de Decisão** (`switch / case`)
- **Laços de Repetição** (`for...of`)
- **Manipulação de Strings** (`Template Literals`, `.toLowerCase()`)
- **Node.js** para execução no terminal

---

## 📂 Estrutura do Projeto

```bash
├── index.js     # Código-fonte principal com a classe e execução
└── README.md    # Documentação do projeto
