const express = require('express')
const router = express.Router()
const {getProducts, insProducts, delProducts, upProducts} = require('../controllers/productController')

router.get('/products', async (req, res) => {

    try {
        const products = await getProducts()
        res.json(products)
    }

    catch(ex) {
        res.status(500).send('Erro: '+ex) // Atenção no tipo que está sendo enviado
    }
})

router.post('/products', async (req, res) => {
    const {productName, price, date} = req.body

    try {
        await insProducts(productName, price, date)
        res.send('Produto inserido com sucesso!')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ex) // Atenção no tipo que está sendo enviado
    }
})

router.put('/products/:id', async (req, res) => {
    const {id} = req.params
    const {newDate} = req.body

    try {
        await upProducts(id, newDate)
        res.send('Date atualizado com sucesso')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ ex)
    }
})

router.delete('/products/:id', async (req, res) => {
    const {id} = req.params

    try {
        await delProducts(id)
        res.send('Product Deletado com sucesso')
    }

    catch(ex) {
        res.status(500).send('Erro: '+ ex)
    }
})

module.exports = router
