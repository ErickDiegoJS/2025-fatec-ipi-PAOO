//declaração de variaveis
//const, let e var

//===============================================

//const é uma variavel constante/imudavel
//String nome = 'Jóse'
// const nome = 'José'
// console.log(nome)
// nome = 'José da Silva'

//===============================================

//let não é conatante
// let a = 2
// let nome = 'Marcos'
// console.log(a)
// console.log(nome)
// nome = 'Marquinhos'
// a = 3
// console.log(a)
// console.log(nome)

//===============================================

//var é um tipo de varavel antigo e contra intuitivo
//a declaração tem que ser repetida para modificar seu valor
// var linguagem  = 'Javascript'
// console.log("Aprendizado" + linguagem)
// var linguagem = 'Java'
// console.log("Aprendizado" + linguagemn)

// com o var é possivel utilizar variaveis exclusivas de if/while/for/do fora da estrutura
// var idade = 18
// console.log("Oi, " + nome)
// if(idade >=18){
//     var nome = "João"
//     console.log(nome + " pode dirigir")
// }
// console.log(`Até mais, ${nome}`)

//===============================================

// //A variavel não tem tipo, o valor que está localizado nela possui tipo
// //a variavel idade possui um valor do tipo number
// let idade = 20
// console.log(typeof(idade))
// //agora a variavel possui um valor do tipo String
// idade = "vinte"
// console.log(typeof(idade))
// //uma variavel só declarada terá um valor do tipo undefined
// //javascrpt possui sistema de tipos dinamico

//===============================================

const n1 = 2
const n2 = '2'
const n3 = n1 + n2
console.log(n3)
const n4 = n1 + Number(n2)
console.log(n4)

//===============================================

console.log(1 == 1) // true
console.log(1 == '1')// true
console.log(1 === '1')// false
console.log(1 ==[1])//true
console.log(1 == [1, 1])//false
console.log(null == undefined)//true
console.log([] == false)//true
console.log([] = [])//false