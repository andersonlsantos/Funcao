// Função em JS é First-Class Object (Citizens)
// Higher-order Function

// 1 - criar de forma literal
// essa função pode ter parametros ou retornar valor, caso não coloque nada essa função vai ficar undefined 
// o bloco({}) na função é obrigatorio
// os parametros ficam dentro dos parenteses()
function fun1 () {}

// 2 - Armazenar uma função em uma variável
// é uma função anonima
const fun2 = function () {}

// 3 - Armazenar uma função dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// 4 - Armazenar uma função dentro de um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())

// 5 - Como passar uma função como parametro para outra função
function run(fun) {
    fun()
}
run(function () { console.log('Executand....')})

// 6 - Uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
//ou pode fazer desse jeito
const cincoMais = soma (2, 3)
cincoMais(4) //é a mesma coisa que soma(2, 3)(4)

function soma2 (a, b) {
    return function (c) {
        return function (d) {
            console.log(a + b + c + d)
        }
    }
}
soma2(2, 3)(4)(5)
// ou desse jeito
const noveMais = soma2(2, 3)(4)
noveMais(5)

