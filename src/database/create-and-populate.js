/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
import { dirname } from'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "enderecos_id" int,
    "status_id" int,
    "pacote_id" int,
    "opcoes_de_entrega" varchar(30)
  );`;

const ADD_PEDIDOS_DATA = `
INSERT INTO PEDIDOS (enderecos_id, status_id, pacote_id, opcoes_de_entrega)
VALUES 
    (1, 1, 1, "Correio")
`

function criaTabelaPdd() {
    db.run(PEDIDOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de PEDIDOS");
    });
}


function populaTabelaPdd() {
    db.run(ADD_PEDIDOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de PEDIDOS");
    });
}


db.serialize( ()=> {
    criaTabelaPdd();
    populaTabelaPdd();
});