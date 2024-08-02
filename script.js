const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa- alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [,
    {
    enunciado: "Qual pais tem o maior indice de pobreza?",
    alternativas: [ 
        
    {texto: "África",
     afirmação: "Afirmção da alternativa 1"  
    },

    {texto: "Somália",
     afirmação: "Afirmação da alternativa 2"
    },

     {texto: "Cuba",
     afirmação: "Afirmação da alternativa 3"
     },
    ]
},   
    {
      enunciado: "Qual o estado brasileiro mais racista?",
      alternativas: [

      {texto: "São Paulo",
       afirmação: "Afirmção da alternativa 1"  
      },
  
      {texto: "Paraná",
       afirmação: "Afirmação da alternativa 2"
      },
  
       {texto: "Rio Grande do Sul",
       afirmação: "Afirmação da alternativa 3"
       },
      ]
    },


      {
        enunciado: "Qual dos seguintes fatores é mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
        alternativas: [

        {texto: "Distribuição desigual de riqueza e renda",
       afirmação: "Afirmção da alternativa 1"  
      },
  
      {texto: "Localização geográfica",
       afirmação: "Afirmação da alternativa 2"
      },
  
       {texto: "Condições Climáticas",
       afirmação: "Afirmação da alternativa 3"
       },
      ]
    }
];

let atual = 0
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
  mostraResultado();
  return;
  }

  perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    caixaAlternativas.addEventListener("click", () =>respostasSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativas);
  }
}

function mostraResultado() {
  caixaPerguntas.textContent = "";
  textoResultado.te = historiaFinal;
  caixaAlternativas.textContent = "";
}

function respostasSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmação;
  historiaFinal+= afirmacoes + "";
  atual++;
  mostraPergunta();
}
mostraPergunta();


   
