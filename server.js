const express = require('express')
const productsRouter = require('./routes/routeSale')
const requestsRouter = require('./routes/routeRequests.js')

const app = express()

app.use(express.json())
app.use('/api', productsRouter)

app.use('/api', requestsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Running')
})