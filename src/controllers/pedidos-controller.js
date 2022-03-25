import Pedidos from "../models/pedidos.js";
import PedidosDAO from "../DAO/pedidos-DAO.js"
import { response } from "express";

const pedidosController = (app, bd) => {
    const pedidosDAO = new PedidosDAO(bd)

    app.get('/pedidos', async (req, res) => {
        try {
            await pedidosDAO.pegaTodosPedidos()
                .then(response => {
                    res.status(200).json(response)
                })


        } catch (error) {
            res.status(400).json(error)
            console.log('error')
        }
        // .then((resposta)=>{
        //     res.status(302).json(resposta)
        // })
        // .catch((erro)=>{
        //     res.status(404).json(erro)
        // })
    })

    app.get('/pedidos/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await pedidosDAO.pegaUmPedido(id)
                .then(response => {
                    res.status(200).json(response)
                })


        } catch (error) {
            res.status(404).json(error)
        }
        // .then((resposta)=>{
        //     res.status(302).json(resposta)
        // })
        // .catch((erro)=>{
        //     res.status(404).json(erro)
        // })
    })

    app.post('/pedidos', async (req, res) => {
        const body = req.body
        try {
            const novoPedido = new Pedidos(body.enderecos_id, body.status_id, body.pacote_id, body.opcoes_de_entrega)
            await pedidosDAO.inserePedido(novoPedido)
                .then(response => {
                    res.status(201).json(response)
                })

            // .then((resposta)=>{
            //     res.status(201).json(resposta)
            // })
            // .catch((erro)=>{
            //     res.status(400).json(erro)
            // })
        } catch (error) {
            res.status(400).json(error)

            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/pedidos/id/:id', async (req, res) => {
        const id = req.params.id
        try {
            await pedidosDAO.deletaPedido(id)
            .then(response => {
                res.status(201).json(response)
            })

        } catch (error) {
            res.status(400).json(error)
        }

        // .then((resposta)=>{
        //     res.status(200).json(resposta)
        // })
        // .catch((erro)=>{
        //     res.status(404).json(erro)
        // })
    })

    app.put('/pedidos/id/:id', async (req, res) => {
        const id = req.params.id
        const body = req.body


        try {
            const pedidosAtualizado = new Pedidos(body.enderecos_id, body.status_id, body.pacote_id, body.opcoes_de_entrega)
            await pedidosDAO.atualizaPedido(id, pedidosAtualizado)
            .then(response =>{
                res.status(200).json(response)
            })
            
            // .then((resposta)=>{
            //     res.status(200).json(resposta)
            // })
            // .catch((erro)=>{
            //     res.status(404).json(erro)
            // })
        } catch (error) {

            res.status(404).json(error)

            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default pedidosController