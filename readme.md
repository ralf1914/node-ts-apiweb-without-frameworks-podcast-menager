

# Podcast API

Esta é uma API simples construída com Node.js para gerenciar episódios de podcasts. Ela permite listar episódios e filtrar episódios com base em parâmetros de consulta.

## Endpoints

A API tem os seguintes endpoints:

### 1. Listar Episódios
- **URL**: `/list`
- **Método**: `GET`
- **Descrição**: Retorna a lista completa de episódios de podcasts.
  
#### Exemplo de Requisição:
```bash
GET /list
```


``
### 2. Filtrar Episódios
- **URL**: `/ep`
- **Método**: `GET`
- **Descrição**: Retorna episódios filtrados com base nos parâmetros de consulta.

#### Parâmetros de Consulta:
- `genre` (opcional): Filtra episódios por gênero.
- `date` (opcional): Filtra episódios por data (formato: YYYY-MM-DD).

#### Exemplo de Requisição:
```bash
GET /ep?genre=tech&date=2021-01-01
```

## Instalação

Para rodar a API localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/podcast-api.git
    cd podcast-api
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute o servidor:
    ```bash
    npm start
    ```

Por padrão, o servidor estará rodando na porta `3000`. Você pode acessar a API em `http://localhost:3000`.

## Estrutura de Arquivos

A estrutura do projeto é a seguinte:

```
/podcast-api
  ├── /controllers
  │    ├── podcasts-controller.ts   # Contém a lógica de controle dos episódios
  ├── /routes
  │    ├── routes.ts                # Define as rotas da aplicação
  ├── /enum
  │    ├── http-method.ts           # Enum para os métodos HTTP
  ├── app.ts                        # Arquivo principal que define o servidor
  ├── package.json                  # Dependências e scripts do projeto
```

## Como Funciona

1. O servidor utiliza o Node.js para processar as requisições HTTP.
2. As rotas são definidas em `routes.ts` e são tratadas no arquivo `app.ts`.
3. A lógica de controle dos episódios é gerenciada pelos controladores em `podcasts-controller.ts`.
4. O enum `http-method.ts` ajuda a garantir que os métodos HTTP corretos sejam usados nas rotas.

## Contribuição

Se você quiser contribuir para o projeto, fique à vontade para abrir uma *pull request* ou relatar problemas na seção de *issues*. 

### Como Contribuir:
1. Faça o fork do repositório.
2. Crie uma branch para a sua funcionalidade (`git checkout -b feature/novarecursos`).
3. Comite suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça o push para a branch (`git push origin feature/novarecursos`).
5. Abra uma pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Esse é um modelo básico que cobre os aspectos essenciais do seu projeto. Você pode ajustá-lo conforme for necessário, principalmente se o projeto crescer com novas funcionalidades!