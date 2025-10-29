//fazer imports
import express from 'express'
import axios from 'axios'
const app = express()
//aplicar eventuais middlewares
app.use(express.json())

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log('Evento recebido:', evento)
    res.sendStatus(200) //responde ao barramento com OK
})
//colocar o mss para funcionar na porta 7000
const port = 7000
app.listen(port, () => console.log(`Classificação. Porta ${port}.`))