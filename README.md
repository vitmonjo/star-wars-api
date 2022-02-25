# star-wars-api
João Vítor Monteiro
Relatório de produção

Primeiramente, gostaria de estabelecer que eu nunca tinha feito a implementação de uma API anteriormente, porém, com uma breve pesquisa percebi que não era tão complicado quanto imaginava, e no fim das contas, este trabalho têm sido muito produtivo para o meu desenvolvimento como programador e solucionador de problemas pois acreditem, enfrentei muitos para chegar a este resultado final. Este relatório então serve quase como um diário dos problemas enfrentados e quais foram as adaptações necessárias para superá-los.

Comecei trabalhando com as pessoas, que totalizam 82. De início, estava fazendo a solicitação de pessoa por pessoa, porém, logo percebi que isso poderia ser uma transferência desnecessária de dados da API (O limite diário de pedidos por IP é de apenas 10000 então em questão de pouco tempo eu poderia perder acesso à API por 24 horas). Percebi então que era possível fazer a solicitação das pessoas por meio de páginas com 10 unidades cada, dessa forma, seriam realizados somente 9 pedidos à API, aliviando assim o tráfego.