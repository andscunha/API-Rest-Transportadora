import PedidosDAO from "../DAO/pedidos-DAO.js";

class Pedidos {
    constructor(enderecos_id, status_id, pacote_id, opcoes_de_entrega){
        this.enderecos_id = enderecos_id;
        this.status_id = status_id;
        this.pacote_id = pacote_id;
        this.opcoes_de_entrega = opcoes_de_entrega;
    }
}

export default Pedidos