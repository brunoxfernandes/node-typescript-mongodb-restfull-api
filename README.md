# Node TypeScript MongoDB RESTful API

Este projeto foi criado com o intuito de praticar e aperfeiçoar as minhas competências no desenvolvimento de APIs RESTful utilizando Node.js, TypeScript e MongoDB. É uma recriação de uma API anterior, orientada pela perspetiva do Felipe Rocha, do Full Stack Club, no seu tutorial em vídeo [aqui](https://www.youtube.com/watch?v=gU3kp7Aw0JI).

## Visão Geral do Projeto

Esta API demonstra o uso de arquiteturas e princípios modernos, flexíveis e amplamente reconhecidos no mercado. O design desta API inclui:

- **Princípios SOLID**: Para garantir que o código é modular, fácil de compreender e de manter.
- **Repository Pattern**: Utilizado para abstrair a camada de acesso a dados, tornando o código mais flexível e fácil de expandir ou modificar.
- **Operações CRUD**: Implementação das operações básicas de Criar, Ler, Atualizar e Apagar.
- **Express**: Utilizado como o framework para gestão de pedidos HTTP na API.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução
- **TypeScript**: Linguagem fortemente tipada para JavaScript
- **MongoDB Atlas**: Versão em cloud do MongoDB para configuração e escalabilidade fáceis
- **Express**: Framework web para gerir pedidos HTTP

## Configuração Inicial

### Pré-requisitos

1. **Conta no MongoDB Atlas**: Cria uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) e configura um cluster.
2. **String de ligação**: Gera uma string de ligação para o teu cluster MongoDB Atlas, que será utilizada para ligar a API à base de dados. (Inclui explicação no vídeo acima mencionado)

### Instalação

1. **Clonar o repositório**:

   ```bash
   git clone https://github.com/brunoxfernandes/node-typescript-mongodb-restfull-api.git
   ```

2. **Instalar as dependências**:
   Navega até à pasta do projeto e instala as dependências:

   ```bash
   cd node-typescript-mongodb-restfull-api
   yarn install
   ```

3. **Configurar variáveis de ambiente**:

   - Cria um ficheiro `.env` na raiz do projeto.
   - Adiciona a URI de ligação ao MongoDB Atlas e outras configurações necessárias no `.env`:

   Exemplo de conteúdo do `.env`:

   ```plaintext
   PORT=8000
   MONGODB_URL=mongodb+srv://clusterX.XXXXX.mongodb.net
   MONGODB_USERNAME=root
   MONGODB_PASSWORD=pass
   ```

4. **Compilar o projeto**:

   ```bash
   yarn build
   ```

5. **Iniciar o servidor**:

   ```bash
   yarn start
   ```

### Scripts Disponíveis

- **`yarn start:dev`**: Inicia o servidor em modo de desenvolvimento com recarregamento automático.
- **`yarn build`**: Compila o projeto TypeScript para JavaScript numa pasta `build`.
- **`yarn start`**: Inicia o servidor utilizando os ficheiros compilados.

## Estrutura do Projeto

A estrutura do projeto segue uma organização baseada em princípios de Clean Architecture e SOLID:

```
src/
├── controllers/    # Controladores para lidar com a lógica de cada rota
├── database/       # Configuração e ligação à base de dados
├── models/         # Modelos de dados para MongoDB
├── repositories/   # Implementação do Repository Pattern para acesso aos dados
└── index.ts        # Ficheiro principal para iniciar o servidor (inclui rotas)

```

## Utilização

Esta API fornece endpoints básicos para operações CRUD. Podes interagir com ela utilizando ferramentas como o Postman ou qualquer cliente HTTP.

### Exemplos de Endpoints

- **GET /users** - Obter uma lista de utilizadores
- **POST /users** - Criar um novo utilizador
- **PATCH /users/:id** - Atualizar um utilizador existente
- **DELETE /users/:id** - Apagar um utilizador

## Agradecimentos

Agradecimentos especiais ao Felipe Rocha pela orientação neste projeto. Podes ver o tutorial dele no YouTube [aqui](https://www.youtube.com/watch?v=gU3kp7Aw0JI).
