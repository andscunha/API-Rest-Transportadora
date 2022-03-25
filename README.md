# 🚚 API Transportadora

 <p align="justify">Projeto de encerramento do módulo 4 da Resilia Educação. O objetivo é desenvolver uma API Rest de uma transportadora.

---

## 📮 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.13.2
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.1.2
- <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.17.3
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a> - v. 5.0.0
- <a href="https://nodemon.io/">Nodemon</a> - v. 2.0.15

---

## 📨 Iniciando da aplicação

 <p>Rode os comandos a seguir no terminal ou PoweShell.</p>
 
 - Clone o repositório:
```
git clone https://github.com/Ands1776/API-Rest-Transportadora.git
```
- Acesse a pasta:
```
cd API-Rest-Transportadora
```
- Instale os pacotes necessários:
```
npm install
```
- Popule o banco de dados:
```
npm run populate
```
- Inicie o servidor:
```
npm run start
```
<p>Ao iniciar o projeto, o servidor será aberto em http://localhost:3000/, sendo 3000 a porta padrão. Caso necessário, a porta poderá ser alterada no arquivo server.js</p>

---

## 📦 Rotas HTTP

### <b> GET /pedidos </b>

Lista todos os pedidos da base de dados.
Exemplo da resposta esperada:

```
{
	"pedido": [
		{
			"ID": 1,
			"enderecos_id": 1,
			"status_id": 1,
			"pacote_id": 1,
			"opcoes_de_entrega": "Correio"
		}
	],
	"erro": false
}

```

### <b> GET /pedidos/id/:id </b>

Retorna o pedido de acordo com o id. Campo ":id" deverá ser substituído pelo id do pedido escolhido.
Exemplo da resposta esperada:

```
{
	"pedido": {
		"ID": 1,
		"enderecos_id": 1,
		"status_id": 1,
		"pacote_id": 1,
		"opcoes_de_entrega": "Correio"
	},
	"erro": false
}
```

### <b> POST /pedidos </b>

Insere um novo pedido na base de dados.

Exemplo da resposta esperada:

```
{
	"mensagem": "Pedido efetuado com sucesso!",
	"pedido": {
		"enderecos_id": 7,
		"status_id": 7,
		"pacote_id": 7,
		"opcoes_de_entrega": "Sedex"
	},
	"erro": false
}
```

### <b> PUT /pedidos/id/:id </b>

Atualiza um pedido na base de dados. Campo ":id" deverá ser substituído pelo id do pedido a ser atualizado.

Exemplo da resposta esperada:

```
{
	"mensagem": "Pedido de id 7 atualizado com sucesso",
	"pedido": {
		"opcoes_de_entrega": "Retirada no local"
	},
	"erro": false
}
```

### <b> DELETE /pedidos/id/:id </b>

Deleta o pedido escolhido da base de dados.
Exemplo da resposta esperada:

```
{
	"pedido": "Pedido deletado com sucesso!",
	"erro": false
}
```

---

## 🚛 Desenvolvido por

<b>Anderson da Cunha Vidal 👨🏾‍💻</b>

<p>Estudante de Desenvolvimento Web Full Stack.</p>

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anderson-da-cunha-vidal-2560a520a/)](https://www.linkedin.com/in/anderson-da-cunha-vidal-2560a520a/)