class Conteudo {
  constructor(id, dynamicTag) {
    this.id = id;
    this.dynamicTag = dynamicTag;
  }

  adicionarTexto(tag) {
    const div = $("#conteudo");
    let conteudo = tag;
    div.html("");
    div.append(conteudo);
  }

  addConteudo() {
    $(`${this.id}`).on("click", () => {
      this.adicionarTexto(this.dynamicTag);
      $("#conteudo div").focus();

      if (this.id == "#portfolio") {
        this.pedidoJson();
      }
    });
  }

  pedidoJson() {
    fetch("js/projetos.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na conexão com a API JSON");
        }
        return response.json();
      })
      .then((projetos) => {
        console.log(projetos);
        const contentPort = $("#contentPort");
        projetos.forEach((projeto) => {
          let linguagens = projeto.linguagens;
          let linguagem = linguagens.join(" ");

          const site = `
                  <div class="sitePort">
                      <div class="card">
                          <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">
                          <img src="${projeto.image}" alt="${projeto.name}">
                          </a>
                          <div class="card-body">
                              <span class="card-title">
                                  ${linguagem}
                              </span>
                              <p class="card-text">Site criado como projeto do curso profissional. Proposta do projeto era criar um site para banda/artista favorito utilizando html/css, bootstrap e um pouco de JavaScript para colocar em prática o que foi ensinado até aquele momento. Deploy com GitHub Pages.</p>
                              <a href="${projeto.link}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-danger">Visitar Site</a>
                          </div>
                      </div>
                  </div>
              `;
          contentPort.append(site);
        });
      });
  }
}

//Conteúdo adicionado para Sobre
let txtSobre = `
    <h2>Kevin De Paula</h2>
    <div id="about_div" tabindex="0">
        <ul>
            <li>
                <div id="who_i_am">
                    <h3>Quem Sou Eu</h3>
                    <p>
                    Tenho 25 anos e estou dando os primeiros passos como desenvolvedor web após concluir minha formação profissional em Web Development. Essa conquista marca o início de uma nova fase da minha vida - uma fase em que estou pronto para crescer, aprender e fazer a diferença.
                    </p>
                </div>
            </li>
            <li>
                <div id="purpose">
                    <h3>Um Começo com Propósito</h3>
                    <p>
                    Entrar agora no mercado de tecnologia, especialmente em meio a tanta inovação e ao avanço da inteligência artificial, pode parecer desafiador. Não vejo isso como um obstáculo, e sim como uma oportunidade de evoluir mais rápido e melhor. Acredito no meu potencial, na minha vontade de crescer e na minha determinação de nunca desistir até alcançar meu objetivo.
                    </p>
                </div>
            </li>
            <li>    
                <div id="developer">
                    <h3>Porque Programação</h3>
                    <p>
                    Antes de conhecer a programação, eu sentia que faltava algo para escolher minha profissão. Tive todos os motivos para seguir uma carreira com máquinas flexográficas e também como eletricista, porém quando por acaso comecei a estudar programação, percebi que havia encontrado o que estava a procura. Por isso minha motivação e determinação para ingressar nessa área. Agora sou um jovem maduro e com o foco em algo específico, à <strong>programação</strong>.
                    </p>
                </div>
            </li>
        </ul>
    </div>
`;

//Conteúdo adicionado para Portfólio
let sites = `
    <h2>Portfólio</h2>
    <div id="contentPort" tabindex="0">
        
   </div>
`;

//Conteúdo adicionado para Experiências
let txtExperiencia = `
    <h2>Experiências</h2>
    <div id="exp" tabindex="0">
        <p>Ainda com pouca experiência formal, busco uma oportunidade para crescer junto à empresa, contribuindo com dedicação e aprendendo continuamente. Acredito que o aprendizado é um processo constante — até o fim da vida temos algo a absorver e a oferecer. Estou disposto a vestir a camisola da empresa e ir além de ser apenas mais um colaborador. Um dos meus princípios é justamente esse: não passar despercebido, mas sim fazer a diferença onde estiver.</p>
        <p>Enquanto procuro uma vaga em uma empresa responsável, comprometida com seus projetos e com a satisfação dos seus clientes, também sigo em busca de novos desafios e projetos que me permitam expandir meu conhecimento e fortalecer meu portfólio. Agora que finalizei meu curso profissional, meu objetivo é iniciar no mercado de trabalho o quanto antes e transformar todo o conhecimento adquirido em prática e resultados concretos.</p>
    </div>
`;

//Conteúdo adicionado para Educação
let txtEducacao = `
    <h2>Educação</h2>
    <div id="edu-ca" tabindex="0">
        <ul>
            <li>
            <h3>Web Development - Master D (2024 - 2025)</h3>
            <h5>Curso Profissional</h5>
            <ul>
                <li>Criação de sites dinâmicos com HTML/CSS, Bootstrap, JavaScript, JQuery, PHP e Mysql</li>
                <li>Criação de três sites para portfólio pessoal</li>
                <li>Programação Orientada a Objeto</li>
                <li>Paradigma estruturado/imperativo</li>
            </ul>
            </li>
            <li>
            <h3>Próximos passos</h3>
            <p>Assim que iniciar no mercado de trabalho, pretendo começar um curso intensivo de inglês com o objetivo de alcançar a fluência. Busco aprimorar minha comunicação na língua inglesa para acompanhar de perto as inovações tecnológicas, que em sua maioria são divulgadas primeiramente nesse idioma.</p>
            <p>Com o tempo e a construção de uma carreira sólida dentro da empresa, planejo iniciar uma licenciatura em Engenharia de Software, visando desenvolver uma base teórica consistente que complemente a prática adquirida no dia a dia profissional.</p>
            <p>Agora que finalizei meu curso profissional, sigo determinado a continuar estudando e evoluindo. Tenho clareza sobre os conteúdos que preciso fortalecer e me dedico constantemente à prática, à descoberta de novas funcionalidades (features), ao aprofundamento na lógica de programação e ao domínio das linguagens que venho utilizando.</p>
            </li>
        </ul>
    </div>
`;

const sobre = new Conteudo("#sobre", txtSobre);
const portfolio = new Conteudo("#portfolio", sites);
const experiencia = new Conteudo("#experiencias", txtExperiencia);
const educacao = new Conteudo("#educacao", txtEducacao);

$(document).ready(function () {
  sobre.addConteudo();
  portfolio.addConteudo();
  experiencia.addConteudo();
  educacao.addConteudo();
});
