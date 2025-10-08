const { v4 : uuidv4} = require('uuid')
const express = require('express')
const app = express()
app.use(express.json())

//GET serve para obter coisas do servidor
//POST serve para cadastrar itens novos
//PUT serve para atualizar itens existentes
//DELETE serve para apagar items existentesç

/*
(
    1: [
        (id:100, text0: 'comprar acucar', lembreteId: 1)
        ]
    2: [
        {id:1000, texto: 'qq coisa', lembreteId: 2}
        ]
    3: [
        {id:1001, texto 'outra coisa', lembreteId: 3}
        ]
)
*/
// POST /lembretes/1/observações (req, res) => {}

const observacoesPorLembrete = {}
app.post('/lembretes/:id/observações', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const { id: lembreteId } = req.params
    const observacao = {id: idObs, texto, lembreteId} 
    const observacoesDoLembrete = observacoesPorLembrete [lembreteId] || []
    observacoesDoLembrete.push({observacao})
    observacoesPorLembrete[lembreteId] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)
})

app.post('/evento', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

// GET /lembretes/:id/observacoes (req, res) => {}
app.get('/lembretes/:id/observações', (req, res) => {
    //devolver a lista de observações do lembrete cujo id faz parte do path
    //ou uma lista vazia se ainda não existir
    res.status(200).json(observacoesPorLembrete[req.params.id] || [])
})

const port = 5000 
app.listen(port, () => console.log(`Lembretes. Porta ${port}.`))