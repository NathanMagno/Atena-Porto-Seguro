## Sobre o Projeto

Sistema de inspeção de veículos que supre as necessidades da Porto Seguro   
Para uma boa experiência e segurança de seus dados, a aplicação possui sistema de cadastro, tela inicial para acesso a todas as funcionalidades do e recursos do sistema. O sistema conta
com funcionalidades de cadastro de veículos, inspeção de componentes do veículo e geolozalicação de veículos e oficinas credenciadas pela Porto Seguro,
facilitando para que o usuário entre em contato e agende manutenção das peças.

## Páginas da aplicação

### Cadastro

* **Login**: Válidação dos dados cadastrais do usuário para liberação do acesso ao sistema
* **Criar conta**: Sistema coleta informações fornecidas pelo usuário para criar um novo registro no sistema
* **Recuperar Senha**: Usuário informa seu email para que o sistema envie o código de recuperação 
* **Redefinir Senha**: Com o código de recuperação informado, o usuário poderá criar uma nova senha para seu acesso

![Ícone de cadastro](https://img.icons8.com/?size=100&id=122843&format=png&color=000000)

### Funcionalidades do sistema

* **Home**: Tela inicial do sistema onde todos os recursos do sistema estão disponiveis
* **Cadastrar veículos**: Usuário fornece informações de seu veículo para o sistema cadastrá-lo
* **Contato com suporte**: Canal de chat com a IA para esclarecer dúvidas e auxíliar usuário na utilização do sistema
* **Meus veículos**: Vizualização dos veícuilos cadastros usuário na plataforma, o mesmo tem a opção de excluir algum veículo da plataforma ou obter a localização
* **Localizar veículos**: Após selecionar o veículo em "Meus veículos" e escolher a opção de obter sua localização, o usuário é direcionado para uma página onde tem acesso à
gelocalização do veículo e de oficinas próximas.

![Ícone de Funcionalidades](https://img.icons8.com/?size=100&id=111278&format=png&color=000000)

### Conta

* **Minha conta**: Vizualização das informações do perfil do usuário


![Ícone de Conta](https://img.icons8.com/?size=100&id=64174&format=png&color=000000)

### Página não encontrada

* **Erro 404**: Alerta de página não encontrada

![Ícone de Página não encontrada](https://img.icons8.com/?size=100&id=u2niFzFCVyR0&format=png&color=000000)

### Consumo de API Java e CRUD

Para este projeto, desenvolvemos uma API em Java para realizar a manipulação das informações dos veículos do usuário no sistema. Por tanto, agora as telas de
vizualizar e adicionar veículos estão funcionais. A aplicação contém 3 métodos HTTP funcionais: 

* **POST**: Pode ser acessado pela tela do menu inicial na funcionalidade "Adicionar Veículos"
* **GET**: Pode  ser acessado pela tela do menu inicial na funcionalidade "Meus veículos"
* **DELETE**: Dentro de "Meus veículos" é possível visualizar um pequeno botão para "Excluir" o veículo desejado.

![Ícone de computação em nuvem](https://img.icons8.com/?size=100&id=LuhIs6LiDYwT&format=png&color=000000)

### Membros do projeto

* **Integrantes**: Vizualação das fotos, nomes e RMs dos integrantes do grupo, junto ao repositório remoto

![Ícone de Integrantes](https://img.icons8.com/?size=100&id=2hhehOWktnv1&format=png&color=000000)

## Dependências do projeto

~~~ json
   "dependencies": {
    "next": "15.0.1",
    "react": "19.0.0-rc-69d4b800-20241021",
    "react-dom": "19.0.0-rc-69d4b800-20241021",
    "react-icons": "^5.3.0"
  }
~~~

~~~ json
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "15.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
~~~

## Integrantes

* Nathan Magno Gustavo Cônsolo  RM 558987
* Gustavo de Aguiar Lima Silva  RM 557707
* Gabriel Yuji Suzuki  RM 556588

## Links

Repositório Remoto do Projeto: https://github.com/Hitz299/Porto-Seguro-API.git

Projeto Vercel: porto-seguro-api.vercel.app

Repositório da API Java: https://github.com/Hitz299/API_JAVA_CARROS.git

## Utilização do Projeto

Para o desenvolvimento do sistema de login, utilizamos o método de autenticação por token armazenado nos cookies da página. O middleware que implementamos no nosso projeto Next.js gerencia a autenticação do usuário de forma eficiente. Ele verifica a presença de um token de autenticação (auth_token) nos cookies a cada requisição. Se o token não estiver presente e o usuário tentar acessar a página inicial, ele será redirecionado para a página de login. Por outro lado, se o usuário já estiver autenticado (ou seja, o token estiver presente) e tentar acessar a página de login, será redirecionado de volta para a página inicial.

Para a implementação deste método, utilizamos um registro de usuário ficticio, então, para que você possa realizar o login na plataforma, utilize as seguintes credenciais:

`Email: mr.fiap@gmail.com`
`Password: front-end`
