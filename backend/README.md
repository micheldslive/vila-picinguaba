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

Criar a infraestrutura necessária para o armazenamento e coleta de dados de um site. Isso inclui:
  
- configuração do banco de dados com as tabelas necessárias e relacionamentos entre elas;
- criação de uma API capaz de enviar, coletar e atualizar dados;
- criação de uma página web para mostrar as capacidades da API.

# Tecnologias implementadas 

Neste projeto foram utilizadas as seguintes tecnologias / bibliotecas:

- **Nestjs**
  - **Yarn** - sistema de gerenciamento de pacotes
  - **Typescript** - por ser estritamente tipado 
  - **typeORM** - construtor de consultas para a comunicação
  - **mysql** - Drive para gerenciamento do banco de dados
  - **uuid** - gerador de id timestamp
  - **Swagger** - para descrever / documentar a API REST

# Banco de Dados 

A estrutura do banco de dados foi concebida após analisar as necessidades do cliente no descritivo teste prático.

-----

## typeORM  

As tabelas foram criadas através do módulo de nó "typeORM" usando `synchronize` para implementar as tabelas, colunas, e relações necessárias.  
  
O arquivo `src/connection/index.ts` armazena as informações de conexão do typeORM com o banco de dados desejado.


## Escrevendo as informações iniciais  
  
Agora podemos inserir todos os dados iniciais por meio de um único comando de terminal, em vez de precisar inseri-los um a um usando a API ou o gerenciador de banco mysql.  
  
  
# API REST

Para a criação da API foi utilizado a cli Nestjs. Com ele conseguimos nos comunicar com as requisições do protocolo HTTP.Separamos as etapas em:
- **controllers**
- **entities**
- **modules**
- **services**

## SWAGGER
  
"Swagger" utilizado para criar gerar uma página mostrando o que é possível fazer com a API. Ele exibirá todos os endpoints e os métodos possíveis de usar.

![Possible requests to interact with each table](.github/swagger.png?raw=true "Possible requests")

# Execução  
  
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

### Caso possua o docker instalado, utilize o comando abaixo para criar os `containers` do banco / api:

```
docker-compose up
```

### Para iniciar a api:
```
yarn start
```

### Para iniciar a api com hot reload:
```
yarn start:dev
```

### Para iniciar a api em modo de produção:
```
yarn start:prod
```  
  
## Desenveloper<br>
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
