[Tecnologias](#-stack-utilizada) |
[Como Executar](#-rodando-localmente) |
[Projeto](#-stack-utilizada) |
[Testes](#-rodando-os-testes) |
[Documentação](#-documentação-da-api)  |
[Next Level](#-melhorias) 

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# Título do Projeto

Uma breve descrição sobre o que esse projeto faz e para quem ele é


## Funcionalidades
- Listagem de games com contagem de anúncios
- Criação de novo anúncio
- Listagem de anúncios por game
- Buscar discord pelo ID do anúncio

## Stack utilizada

**Front-end:** React, Redux, TailwindCSS

**Back-end:** Node, Express

## Roadmap
  - Setup(Fastify, Prisma)
  - Criação do Banco de dados
  - Criação do Diagram ERD
  - Criação da função de contagem dos bolões
  - Estrutura do banco de dados
  - Criação da função de criar um bolão
  - Criação da função de contagem de usuários
  - Criação da função de contagem de palpites

## Rodando localmente

Clone o projeto

```bash
  git clone https://link-para-o-projeto
```

Entre no diretório do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```


## Documentação da API

#### Retorna todos os itens

```http
  GET /api/items
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna um item

```http
  GET /api/items/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

#### add(num1, num2)

Recebe dois números e retorna a sua soma.


## Entidades

![Logo](./prisma/ERD.svg)


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`API_KEY`

`ANOTHER_API_KEY`


## Rodando os testes

Para rodar os testes, rode o seguinte comando

```bash
  npm run test
```


## Melhorias

Que melhorias você fez no seu código? Ex: refatorações, melhorias de performance, acessibilidade, etc


## Aprendizados

O que você aprendeu construindo esse projeto? Quais desafios você enfrentou e como você superou-os?


## Suporte

Para suporte, mande um email para fake@fake.com ou entre em nosso canal do Slack.