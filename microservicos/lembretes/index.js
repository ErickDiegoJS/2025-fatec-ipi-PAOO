const express = require('express')
const app = express()
app.use(express.json())
// API - uma coleção de endpoints
// Application program interface
// Endpoint - Metodo do protocolo http, padrão de acesso e funcionalidade

// GET serve para obter coisas do servidor
// POST serve para cadastrar itens novos
// PUT serve para atualizar itens existentes
// DELETE serve para apagar items existentes

// Um lembrete: (id:1, text: 'Fazer café')
/*
    Lembretes:
    {
        chave: valor,
        1: {id: 1, textto: 'Fazer café'},
        2: {id: 3, texto: 'Ir à festa'}
    }
*/
let id = 1
const lembretes = {}
// definindo um endpoint que permite que lembretes sejam cadastrados
// POST /lembretes (req, res) => {}
app.post('/lembretes', function(req, res){
    
})

// definindo um endpoint que permite que a coleção de lembretes seja obtido
// GET /lembretes (req, res) => {}
app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

const port = 4000
app.listen(4000, () => console.log(`Lembretes. Porta ${port}.`))