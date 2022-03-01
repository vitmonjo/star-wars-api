# star-wars-api
Relatório de produção - João Vítor Monteiro

// Instruções de acesso

Opção 1 - Visualizar o projeto on-line

Este trabalho está hospedado através da ferramenta "Pages" do GitHub que permite hospedar qualquer projeto gratuitamente através dos próprios servidores da empresa.

Link:
https://vitmonjo.github.io/star-wars-api/

Opção 2 - Fazer o download do projeto

2.1 - Acesse o repositório do projeto no meu perfil:
https://github.com/vitmonjo/star-wars-api

2.2 - Clique no botão verde escrito "Code" e na última opção escrita "Download ZIP", caso haja alguma dúvida, a imagem a seguir mostra o processo:
https://imgur.com/a/JGo6f7N

2.3 - Extraia o arquivo com WinRAR ou 7-Zip.

2.4 - Execute o site pelo arquivo "index.html".

// JavaScript

Comecei trabalhando com as pessoas, que totalizam 82. De início, fazia a solicitação (fetch) de pessoa por pessoa, porém, percebi que essa é uma transferência desnecessária, uma vez que é possível solicitar uma página contendo 10 elementos. Dessa forma reduzi exponencialmente o tempo de carregamento.

Ao trabalhar com a API, tive um problema de assincronicidade: não era possível trabalhar com os dados pois os mesmos demoravam alguns segundos para serem buscados. Para resolver isso, passei a utilizar Async/Await, dessa forma, as operações de filtragem e o processo de adicionar os dados tratados ao display seguiam uma ordem obrigatória que dependia do encerramento da operação anterior.

Encontrar os pilotos dentro da API é a operação mais lenta, pois devo primeiramente formar um array com todas as pessoas, em seguida devo filtrar esse array para retirar somente as pessoas que possuem ao menos uma espaçonave, e por ultimo devo adicionar essa lista de pilotos para o display.

Já que o processo de solicitação de dados da SWAPI leva em torno de alguns segundos, inseri uma DIV com o texto "LOADING..." que é removida assim que os cards são criados e adicionados ao display, dessa forma o usuário sabe que o conteúdo está carregando e que não há nenhum problema com o site.

Quanto ao processo de adicionar os elementos ao display, fiz uso do DOM (Document Object Model) para manipular a página de forma dinâmica. Assim que o processo de preencher o array com as informações necessárias, seja pilotos, espaçonaves ou planetas terminava, entrava em ação a função que criava, para cada elemento, um card com a imagem genérica, seguida do nome. O conjunto de cards é organizado através de CSS Grid com uma técnica que torna-os responsivos e dinâmicos, evitando assim potenciais transbordamentos ou excesso de itens.

// HTML e CSS

No decorrer do desenvolvimento de sites, costumo testar como o projeto fica em tamanhos menores, testando assim sua responsividade para dispositivos móveis e a página estava inutilizável. Decidi então adicionar media queries, que adicionam configurações do CSS em determinados tamanhos de tela, neste caso, para dispositivos com no máximo 500px de largura. A página, portanto, também funciona de forma adaptada na maior parte dos celulares do mercado.

Para a estruturação da página, utilizei CSS Grid e dividi a mesma em dois elementos: header e main. No header utilizo novamente CSS Grid para organizar as DIV's. Na versão mobile, também utilizei CSS Grid mas coloquei os itens em uma coluna apenas, para aproveitar o formato retrato de celulares.

Na fonte, optei pelo uso da Distant Galaxy, que é uma fonte feita por fãs inspirada na fonte utilizada nos filmes. Infelizmente dois pilotos possuem acentos no nome que e não são suportados pela língua, fazendo com que a letra acentuada pareça um pouco menor, mas dentro das dezenas de resultados mostrados pela API, esta divergência passa quase que despercebida.

O wallpaper da versão de desktop não está na versão mobile pois possui um formato de paisagem (largura maior do que a altura), o que impede que a imagem preencha a tela sem ser duplicada ou esticada desproporcionalmente. Optei então pela cor #EEEEEE, presente no documento oficial do Desafio Técnico DEV.

Para buscar organização, fiz o uso de subpastas. Cada subpasta possui o arquivo HTML correspondente ao elemento (pilots, starships e planets) e seu respectivo Script, decidi por particionar os arquivos Script para não sobrecarregar a SWAPI com solicitações paralelas. Todavia, todos estes 3 documentos dividem o mesmo arquivo CSS, uma vez que o processo de estilização deles seguem um padrão.

Conclusão

Meu progresso e dificuldades podem ser acompanhados no histórico de commits deste trabalho: https://github.com/vitmonjo/star-wars-api/commits/main.

Neste projeto, exerci ao máximo o exercício de solução de problemas e fortaleci de forma efetiva minha visão estratégica no desenvolvimento de aplicações. Pude aprofundar minha prática com assuntos que estudo e utilizo diariamente como a estruturação de páginas com HTML, estilização através de CSS e também o processo de aumentar a dinâmica e interatividade da página através do JavaScript. Um conhecimento que auxiliou bastante na confecção deste projeto e também é uma das minhas melhores ferramentas para estudar programação é o domínio da língua inglesa, fazendo com que a gama de resultados e problemas com soluções a serem encontrados aumentem exacerbadamente.

Minha expectativa ao estagiar no PREMIA é de ter a oportunidade de aprimorar meus conhecimentos e também contribuir de forma plena para o andamento dos processos do setor e da Fundação CERTI como um todo. O contato com profissionais capacitados e participar de uma organização com um alto nível de comprometimento com a indústria de tecnologia também é um dos principais fatores para minha aplicação. Caso tenha restado alguma dúvida acerca do meu conhecimento e/ou abordagem, não hesite em entrar em contato.

GitHub: https://github.com/vitmonjo
E-mail: vitmonjo@gmail.com
Telefone: (47) 99204-6868
