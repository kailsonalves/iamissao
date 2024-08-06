const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa- alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Qual pais tem o maior indice de pobreza?",
    alternativas: [ 
        
    {texto: "África",
     afirmação: ""  
    },

    {texto: "Somália",
     afirmação: ""
    },

    {texto: "Cuba",
    afirmação: ""
    }]
    },   


    {
    enunciado: "Qual o estado brasileiro mais racista?",
    alternativas: [

    {texto: "São Paulo",
    afirmação: ""  
    },
  
    {texto: "Paraná",
    afirmação: ""
    },
  
    {texto: "Rio Grande do Sul",
    afirmação: ""
    }]
    },


    {
    enunciado: "Qual dos seguintes fatores é mais frequentemente citado como uma causa primária da desigualdade social em sociedades modernas?",
    alternativas: [

    {texto: "Distribuição desigual de riqueza e renda",
    afirmação: ""  
    },
  
    {texto: "Localização geográfica",
    afirmação: ""
    },
  
    {texto: "Condições Climáticas",
     afirmação: ""
    }]
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
  caixaPerguntas.textContent = "As perguntas abordam temas relevantes sobre a desigualdade social: a primeira questiona qual país possui o maior índice de pobreza, ja a segunda busca identificar o estado mais racista do Brasil. A ultima questão se concentra em investigar qual dos fatores, dentre os apresentados, é mais frequentemente apontado como causa primária da esigualdade social em sociedades modernas";
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


   
