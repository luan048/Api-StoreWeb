const cliente = require('../config/db.js')

async function getProducts() {

    try {
        console.log('Iniciando Conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        const resultado = await cliente.query('SELECT * FROM products')
        console.table(resultado.rows)
    }

    catch (ex) {
        console.log('Erro: ' + ex)
    }

    finally {
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function insProducts(productName, price, arrivalDate) {

    try {
        console.log('Iniciando Conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query('INSERT INTO products("productName", "price", "arrivalDate") values (' + "'" + productName + "', '" + price + "', '" + arrivalDate + "');")
        console.log('Valor inserido na tabela')

        const resultado = await cliente.query('SELECT * FROM products')
        console.table(resultado.rows)
    }

    catch (ex) {
        console.log('Erro: ' + ex)
    }

    finally {
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function delProducts(id) {

    try {
        console.log('Iniciando Conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query("DELETE FROM products where id = '" + id + "';")
        console.log('Valor removido da tabela')

        const resultado = await cliente.query('SELECT * FROM products')
        console.table(resultado.rows)
    }

    catch (ex) {
        console.log('Erro: ' + ex)
    }

    finally {
        await cliente.end()
        console.log('Cliente desconectado')
    }
}

async function upProducts(id, newDate) {
    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query("UPDATE request SET date = '" + newDate + "' WHERE id = '" + id + "';")

        const resultado = await cliente.query('SELECT * FROM products')
        console.table(resultado.rows)
        console.log('Valor atualizado na tabela')
    }

    catch (ex) {
        console.log('Ocorreu erro no upProducts. Erro: ' + ex)
    }

    finally {
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

module.exports = {
    getProducts,
    insProducts,
    delProducts,
    upProducts
}
