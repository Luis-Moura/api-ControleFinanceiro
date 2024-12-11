# API de Controle Financeiro

Esta aplicação é uma API de Controle Financeiro desenvolvida com foco em desempenho, escalabilidade e facilidade de manutenção. Ela utiliza um conjunto de tecnologias modernas para garantir uma experiência de desenvolvimento eficiente e uma operação robusta em produção.

# Tecnologias:

- ![🟢](https://img.shields.io/badge/-Prisma-2D3748?style=flat&logo=prisma) **Prisma**: ORM para interagir com o banco de dados PostgreSQL.
- ![⚡](https://img.shields.io/badge/-Fastify-2D3748?style=flat&logo=fastify) **Fastify**: Framework web rápido e eficiente para Node.js.
- ![🐘](https://img.shields.io/badge/-PostgreSQL-2D3748?style=flat&logo=postgresql) **PostgreSQL**: Banco de dados relacional utilizado para armazenar as transações financeiras.
- ![🐳](https://img.shields.io/badge/-Docker-2D3748?style=flat&logo=docker) **Docker**: Ferramenta de containerização para facilitar o desenvolvimento e a implantação da aplicação.
- ![📘](https://img.shields.io/badge/-TypeScript-2D3748?style=flat&logo=typescript) **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- ![🟨](https://img.shields.io/badge/-Node.js-2D3748?style=flat&logo=node.js) **Node.js**: Ambiente de execução para JavaScript no servidor.

# Como Subir a Aplicação

## Pré-requisitos

- **Docker** e **Docker Compose** instalados na sua máquina.
- **Node.js** e **npm** instalados na sua máquina.

## Passos para Executar a Aplicação

1. **Clone o repositório**:
```sh
git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>
```

2. **Instale as dependências**:
```sh
npm install
```

3. **Configure as variáveis de ambiente**:
   Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias. Você pode usar o arquivo `.env.example` como referência.

4. **Construa as imagens Docker**:
```sh
docker-compose build
```

5. **Suba os containers Docker**:
```sh
docker-compose up -d
```

A aplicação estará disponível em `http://localhost:3000`.

## Estrutura dos Arquivos

- **Dockerfile**: Define a imagem Docker para a aplicação.
- **docker-compose.yml**: Configura os serviços Docker, incluindo o banco de dados PostgreSQL.
- **prisma/schema.prisma**: Define o esquema do banco de dados.
- **src/**: Contém o código-fonte da aplicação.
- **.env**: Arquivo de configuração das variáveis de ambiente.

## Comandos Úteis

- **Para parar os containers Docker**:
  docker-compose down

- **Para visualizar os logs dos containers**:
  docker-compose logs -f

- **Para acessar o container do banco de dados**:
  docker exec -it <nome_do_container_db> psql -U user -d mydb
