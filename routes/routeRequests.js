const express = require('express')
const router = express.Router()
const { getRequests, insRequests, delRequests, upClient, upProduct} = require('../controllers/requestsController')

router.get('/requests', async (req, res) => {

    try {
        const requests = await getRequests()
        res.json(requests)
    }

    catch(ex) {
        res.status(500).send('Error: '+ex)
    }
})

router.post('/requests', async (req, res) => {
    const {client_name, product} = req.body

    try {
        await insRequests(client_name, product)
        res.send('Inserido com sucesso!')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ex) // Atenção no tipo que está sendo enviado
    }

})

router.put('/requests/client/:id_request', async (req, res) => {
    const {id_request} = req.params
    const {newClient} = req.body

    try {
        await upClient(id_request, newClient)
        res.send('Atualizado com sucesso!')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ex) // Atenção no tipo que está sendo enviado
    }

})

router.put('/requests/product/:id_request', async (req, res) => {
    const {id_request} = req.params
    const {newProduct} = req.body

    try {
        await upProduct(id_request, newProduct)
        res.send('Atualizado com sucesso')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ ex)
    }

})

router.delete('/requests/:id_request', async (req, res) => {
    const {id_request} = req.params

    try {
        await delRequests(id_request)
        res.send('Deletado com sucesso!')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ ex)
    }

})

module.exports = router