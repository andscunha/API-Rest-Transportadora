class PedidosDAO {
    constructor(db){
        this.db = db
    }

    pegaTodosPedidos = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM PEDIDOS', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "pedido": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmPedido = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM PEDIDOS WHERE ID = ?', 
            id,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "usuario": rows,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    inserePedido = (novoPedido)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO PEDIDOS(enderecos_id, status_id, pacote_id, opcoes_de_entrega) VALUES (?, ?, ?, ?)',
            novoPedido.enderecos_id, novoPedido.status_id, novoPedido.pacote_id, novoPedido.opcoes_de_entrega,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Pedido efetuado com sucesso!`,
                        "pedido": novoPedido,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    deletaPedido = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM PEDIDOS WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "pedido": `Pedido deletado com sucesso!`,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    atualizaPedido = (id, pedido)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE PEDIDOS SET enderecos_id = ?, status_id = ?, pacote_id = ?, opcoes_de_entrega = ? WHERE ID = ?',
            pedido.enderecos_id, pedido.status_id, pedido.pacote_id, pedido.opcoes_de_entrega,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Pedido de id ${id} atualizado com sucesso`,
                        "pedido": pedido,
                        "erro": false
                    })
                }
            }
            )
        })
    }

}

export default PedidosDAO