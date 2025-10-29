const express = require('express')
const app = express()
app.use(express.json())

const baseConsolidada = {}

const funcoes = {
    lembreteCriado: (lembrete) => {
        baseConsolidada[lembrete.id] = lembrete
    },
    observacaoCriado: (observacao) => {
        const observacoes = baseConsolidada[observacao.lembreteId] ['observacoes'] || []
        observacoes.push(observacao)
        baseConsolidada[observacao.lembreteId] ['observacoes'] = observacoes

    }
}

app.get('/lembretes', (req, res) =>{
    //devolve base consolidada como json
    res.json(baseConsolidada)
})

app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        //desestruturar evento, criando variaveis type e payload
        const { type, payload } = evento
        //acessar mapa de funcoaes na posição type
        funcoes[evento.type](payload)
    }
    catch(e){}
})
const port = 6000
app.listen(port,  () => { console.log(`Consulta. Porta ${port}.`)})