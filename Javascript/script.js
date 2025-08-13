//declaração de variaveis
//const, let e var
//eslint

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

// const n1 = 2
// const n2 = '2'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)

// //===============================================

// console.log(1 == 1) // true
// console.log(1 == '1')// true
// console.log(1 === '1')// false
// console.log(1 ==[1])//true
// console.log(1 == [1, 1])//false
// console.log(null == undefined)//true
// console.log([] == false)//true
// console.log([] = [])//false
// // ===============================================
// const triplo = function(n = 5){
//     return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))
// // arrow functions
// const hello = () =>{
//     console.log("Hello")
// }
// // ativação
// hello()
// // tem exatamente um parâmetro: parenteses podem ser omitidos
// const dobro = n => 2 * n
// console.log(dobro(2))
// // tem somente umua linha as chaves podem ser omitidas
// const hello = () => console.log("Hello")
// // tem somente uma linha que produz um valor a ser devolvido
// const dobro = (n) => {
//     console.log('Calculando o dobro...')
//     return 2 * n
// }
// console.log(dobro(1))
// const dobro => 2 * n
// console.log(dobro(5))

// vetores, parte 2
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Alex', 'Cristina']
// A função filter percorre uma coleção e retorna apenas os elementos 
// que satisfazem uma condição especificada por uma função.
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)

// const res = nomes.map(function(nome){return nome[0]})
// console.log(res)

// Dada a coleção a seguir, produzir outre coleção contendo o quadrado de cada número
// usando arrow functions e digitando a menor quantidade de caracteres possivel

// const numeros = [1, 2, 3] //[1, 4, 9]
// console.log(numeros.map(n => n * n))

// const todosComeçamComA =nomes.every(n => n.startsWith('A'))
// const aoMenosUmComeçaComA =nomes.some(n => n.startsWith('A'))

const valores = [1, 2, 3, 4]
// const soma = valores.reduce((acm, v) => acm + v)
// console.log(soma)