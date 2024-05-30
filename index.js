let uno = document.querySelector('#uno')
let dos = document.querySelector('#dos')
let tres = document.querySelector('#tres')
let mas = document.querySelector('#mas')
let cuatro = document.querySelector('#cuatro')
let sinco = document.querySelector('#sinco')
let seis = document.querySelector('#seis')
let por = document.querySelector('#por')
let siete = document.querySelector('#siete')
let ocho = document.querySelector('#ocho')
let nueve = document.querySelector('#nueve')
let divicion = document.querySelector('#divicion')
let cero = document.querySelector('#cero')
let limpiar = document.querySelector('#limpiar')
let menos = document.querySelector('#menos')
let igual = document.querySelector('#igual')
let barra = document.querySelector('#barra-number')

let signo = ''
let primerValor = 0
let segundoValor = 0
let acumulador = 0





uno.addEventListener('click', () => {
    barra.value += parseInt(uno.value)
})
dos.addEventListener('click', () => {

    barra.value += parseInt(dos.value)
})
tres.addEventListener('click', () => {
    barra.value += tres.value
})
mas.addEventListener('click', () => {
    primerValor = barra.value
    console.log(primerValor)
    signo = '+'
    acumulador = acumulador + parseInt(primerValor)
    console.log(acumulador)
    barra.value = "" 
})
cuatro.addEventListener('click', () => {
    barra.value += cuatro.value
})
sinco.addEventListener('click', () => {
    barra.value += sinco.value
})
seis.addEventListener('click', () => {
    barra.value += seis.value
})
por.addEventListener('click', () => {
    primerValor = barra.value
    barra.value = ""
    signo = '*'
})
siete.addEventListener('click', () => {
    barra.value += siete.value
})
ocho.addEventListener('click', () => {
    barra.value += ocho.value
})
nueve.addEventListener('click', () => {
    barra.value += nueve.value
})
divicion.addEventListener('click', () => {
    primerValor = barra.value
    barra.value = ""
    signo = '/'
})
cero.addEventListener('click', () => {
    barra.value += cero.value
})
limpiar.addEventListener('click', () => {
    barra.value += limpiar.value
})
menos.addEventListener('click', () => {
    primerValor = barra.value
    barra.value = ""
    signo = '-'
})
igual.addEventListener('click', () => {
    barra.value += igual.value
})

limpiar.addEventListener('click', () => {
    barra.value = ""
})

igual.addEventListener('click', () => {
    

    if (signo === '+') {
        segundoValor = barra.value
        barra.value = ""
        console.log(segundoValor)
        sumado = acumulador + parseInt(segundoValor) 
        console.log(sumado)
        barra.value += sumado
    }
    else if (signo == '-') {
        segundoValor = barra.value
        barra.value = ""
        console.log(segundoValor)
        sumado = parseInt(primerValor) - parseInt(segundoValor)
        console.log(sumado)
        barra.value += sumado
    }
    else if (signo === '*') {
        segundoValor = barra.value
        barra.value = ""
        console.log(segundoValor)
        sumado = parseInt(primerValor) * parseInt(segundoValor)
        console.log(sumado)
        barra.value += sumado
    }
    else if (signo === '/') {
        segundoValor = barra.value
        barra.value = ""
        console.log(segundoValor)
        sumado = parseInt(primerValor) / parseInt(segundoValor)
        console.log(sumado)
        barra.value += sumado
    }
    acumulador = 0
})



