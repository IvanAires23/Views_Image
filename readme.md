# Leitura de Imagens

Leitura de Imagens é uma API para gerenciamento de leituras de medidores de água e gás, desenvolvida em Node.js e TypeScript. O serviço permite a leitura de medições a partir de imagens, utilizando a API do Google Gemini.

Experimente agora: https://views-image.onrender.com

## Sobre

Este projeto foca em gerenciar medições de água e gás, permitindo que o usuário envie imagens dos medidores e receba as leituras processadas. Com um design simples e eficaz, a API disponibiliza as seguintes funcionalidades:

- **Upload de Imagem:** <br>
  `POST /upload` => Recebe uma imagem em base64 e retorna a medida lida pela API do Google Gemini.
  
- **Confirmação de Leitura:** <br>
  `PATCH /confirm` => Permite confirmar ou corrigir um valor lido anteriormente.

- **Lista de Leituras:** <br>
  `GET /:customer_code/list` => Retorna as leituras registradas de acordo com os filtros de busca.

Com esta aplicação, é possível gerenciar todas as leituras de forma rápida e eficiente.

## Tecnologias

As seguintes ferramentas e frameworks foram utilizados na construção do projeto:<br>

<p>
  <img height="30" src="https://img.shields.io/badge/NODE.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img height="30" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img height="30" src="https://img.shields.io/badge/Express-404D59?style=for-the-badge&logo=express&logoColor=white"/>
  <img height="30" src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
  <img height="30" src="https://img.shields.io/badge/Git-239120?style=for-the-badge&logo=git&logoColor=white"/>
  <img  height="30" src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
</p>

## Como Rodar

1. Este projeto foi desenvolvido em Node.js, portanto, requer a versão 14.18+ ou 16+. Caso necessário, instale o Node.js a partir deste link: [Node.js](https://nodejs.org/en)
2. Clone este repositório:

   ```bash
   git clone https://github.com/IvanAires23/Views_Image

3. Install dependencies
    ```bash
    npm install
    ```
4. Configure the .env file using the .env.example file

5. Run migrations
    ```bash
    npm run dev:migration:run
    ```
6. Run with
    ```bash
    npm run start
    ```
7. You can optionally build the project running
    ```bash
    npm run build
    ```
8. Run the application at http://localhost:4000/health in your browser