const axios = require('axios')
const PROTOCOL = https
const BASE_URL = 'api.openweathermap.org/data/2.5/forecast'
const APPUD = ''
const UNITS = 'metric'
const Q = 'Itu'
const LANG = 'pt_br'
const CNT = 40

const URL = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&units=${UNITS}&q=${Q}&lang=${LANG}&cnt=${CNT}`

const promiseResultante = axios.get(URL)

promiseResultante
.then((previsoes) => {
    console.log(previsoes)
})
.catch((erro) => {
    console.log(`erro: ${erro}`)
})

console.log('Terminando...')