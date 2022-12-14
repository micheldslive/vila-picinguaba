# API VILA PICINGUABA

#

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Objetivo  

Criar a infraestrutura necess??ria para o armazenamento e coleta de dados de um site. Isso inclui:
  
- configura????o do banco de dados com as tabelas necess??rias e relacionamentos entre elas;
- cria????o de uma API capaz de enviar, coletar e atualizar dados;
- cria????o de uma p??gina web para mostrar as capacidades da API.

# Tecnologias implementadas 

Neste projeto foram utilizadas as seguintes tecnologias / bibliotecas:

- **Nestjs**
  - **Yarn** - sistema de gerenciamento de pacotes
  - **Typescript** - por ser estritamente tipado 
  - **typeORM** - construtor de consultas para a comunica????o
  - **mysql** - Drive para gerenciamento do banco de dados
  - **uuid** - gerador de id timestamp
  - **Swagger** - para descrever / documentar a API REST

# Banco de Dados 

A estrutura do banco de dados foi concebida ap??s analisar as necessidades do cliente no descritivo teste pr??tico.

-----

## typeORM  

As tabelas foram criadas atrav??s do m??dulo de n?? "typeORM" usando `synchronize` para implementar as tabelas, colunas, e rela????es necess??rias.  
  
O arquivo `src/connection/index.ts` armazena as informa????es de conex??o do typeORM com o banco de dados desejado.


## Escrevendo as informa????es iniciais  
  
Agora podemos inserir todos os dados iniciais por meio de um ??nico comando de terminal, em vez de precisar inseri-los um a um usando a API ou o gerenciador de banco mysql.  
  
  
# API REST

Para a cria????o da API foi utilizado a cli Nestjs. Com ele conseguimos nos comunicar com as requisi????es do protocolo HTTP.Separamos as etapas em:
- **controllers**
- **entities**
- **modules**
- **services**

## SWAGGER
  
"Swagger" utilizado para criar gerar uma p??gina mostrando o que ?? poss??vel fazer com a API. Ele exibir?? todos os endpoints e os m??todos poss??veis de usar.

![Possible requests to interact with each table](.github/swagger.png?raw=true "Possible requests")

# Execu????o  
  
### Para executar o aplicativo primeiro instale a `node_modules`:

```
yarn
```
  
### Ajuste o `src/connection/index.ts` para direcionar para o banco de dados desejado:

```
    {
      host: "localhost",
      user: "your_user_here",
      password: "your_password_here",
      database: "your_database_here",
    },
```

#### Para iniciar o projeto (volte para a raiz e execute o docker)

```
docker-compose up
```

##### O servidor estar?? dispon??vel no http://localhost:4173 em seu navegador
  
## Desenvolvedor<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/micheldslive">
        <img src="https://avatars.githubusercontent.com/u/55795597?v=4" width="100" alt="Foto no GitHub"/><br>
        <sub>
          <b>Michel Domingos</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
