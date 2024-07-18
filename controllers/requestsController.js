const cliente = require('../config/db.js')

async function getRequests() {
    
    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        const resultado = await cliente.query('SELECT * FROM requests')
        console.table(resultado.rows)
    }

    catch (ex) {
        console.log(ex)
    }

    finally{
        await cliente.end()
        console.log('Desconectado')
    }
}

async function insRequests(client_name, product) {

    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        const requestId = Math.floor(1000 + Math.random() * 9000)

        await cliente.query('INSERT INTO requests("id_request" , "client_name", "product") values ('+"'"+requestId+"' ,'" +client_name+"', '"+product+"');")

        const resultado = await cliente.query('SELECT * FROM requests')
        console.table(resultado.rows)
        console.log('Request Inserido')
    }

    catch (ex) {
        console.log(ex)
    }

    finally{
        await cliente.end()
        console.log('Desconectado')
    }
}

async function delRequests(id_request) {

    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query("DELETE FROM requests where id_request = '"+id_request+"';")
        console.log('Request removido')

        const resultado = await cliente.query('SELECT * FROM requests')
        console.table(resultado.rows)
    }

    catch (ex) {
        console.log(ex)
    }

    finally{
        await cliente.end()
        console.log('Desconectado')
    }
}

async function upClient(id_request, newClient) {

    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query("UPDATE requests SET client_name = '"+newClient+"' WHERE id_request = '"+id_request+"'; ")

        const resultado = await cliente.query('SELECT * FROM requests')
        console.table(resultado.rows)
        console.log('Valor Atualizado')
    }

    catch (ex) {
        console.log(ex)
    }

    finally{
        await cliente.end()
        console.log('Desconectado')
    }
}

async function upProduct(id_request, newProduct) {

    try {
        console.log('Iniciando conexão...')
        await cliente.connect()
        console.log('Conexão bem sucedida!')

        await cliente.query("UPDATE requests SET product = '"+newProduct+"' WHERE id_request = '"+id_request+"'; ")

        const resultado = await cliente.query('SELECT * FROM products')
        console.table(resultado.rows)
        console.log('Valor Atualizado')
    }

    catch (ex) { // Se der errado try, vai para esse
        console.log('Ocorreu erro no postCarros. Erro: '+ex)
    }

    finally{
        await cliente.end()
        console.log('Cliente desconectado...')
    }
}

module.exports = {
    getRequests,
    insRequests,
    delRequests,
    upClient,
    upProduct
}