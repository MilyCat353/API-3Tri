const express = require('express')
const app = express()
const port = 3001
app.use(express.json())

const usuarios = []
app.post('/usuarios', (req, res)=>{
    const usuario = req.body
    usuarios.push(usuario)
    res.send("Usuario cadastrado com sucesso")
})
app.get('/usuarios', (req, res)=>{
    res.send(usuarios)
})



app.get('/ola', (req, res)=>{
    res.send("Ola usuario")
})

app.listen(port, ()=>{
    console.log("API rodando...")
})
