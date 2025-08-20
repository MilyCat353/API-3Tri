const express = require('express')
const app = express()
const port = 3001
const db = require("./db")
app.use(express.json())

const usuarios = []
app.post('/usuarios', async(req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    try{
        const result =  await db.pool.query('INSERT INTO cliente (nome); VALUES (?)', [usuario.nome])
    
    res.send("Usuario cadastrado com sucesso")
    } catch (err){
        throw err;
    }
})
app.get('/usuarios', (req, res)=>{
    res.send(usuarios)

})



app.get('/ola', (req, res)=>{
    res.send("Ola usuario")
})


const produtos = []
app.post('/produtos', (req, res)=>{
    const produto = req.body
    produtos.push(produto)
    res.send("produto cadastrado com sucesso")
})
app.get('/produtos', (req, res)=>{
    res.send(produtos)
})

app.listen(port, ()=>{
    console.log("API rodando...")
})
