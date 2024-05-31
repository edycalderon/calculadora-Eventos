let numeros = document.querySelectorAll('.numer');
let texto = document.querySelector('#barra-number');
let btnAccion = document.querySelectorAll('.accion');
let primerNumero = 0
let segundoNumero = 0
let signo = ""
let acumulador = 0
let sumaFija = 0
let acumuladorMultiplicar = 1
let acumuladorResta = 0
let pasoIf = 0
let pasoDivicion = 0
let valorDivicionFijo = 0
let valorRestaFijo = 0


numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        texto.value += btn.value
    })
})


btnAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.value == "+" || e.target.value == '-'
            || e.target.value == '*' || e.target.value == '/'
            || e.target.value == 'clear') {
            primerNumero = parseInt(texto.value)
            console.log(primerNumero)
            

            // if(e.target.value == "+"){
            //     if (acumulador == 0){
            //         sumaFija = parseInt(primerNumero)
            //         texto.value = ""
            //         acumulador ++  

            //     }
            //     else if (acumulador > 0){
            //         sumaFija = sumaFija + primerNumero
            //         texto.value=''
            //         primerNumero=sumaFija
            //     }
            // }

            if(e.target.value == "+" ){
                acumulador = acumulador + primerNumero
                console.log(acumulador)
                texto.value=""
            }

            if(e.target.value == "*"){
                acumuladorMultiplicar = acumuladorMultiplicar * parseInt(primerNumero)
                console.log(acumuladorMultiplicar)
            }

            
            if(e.target.value == "/"){
                if (pasoDivicion == 0){
                    valorDivicionFijo = parseInt(primerNumero)
                    pasoDivicion ++  
                }
                else if (pasoDivicion > 0){
                    primerNumero = parseInt(texto.value)
                    valorDivicionFijo = valorDivicionFijo / primerNumero
                    texto.value=''
                    primerNumero=valorDivicionFijo


                }
            }


            if(e.target.value == "-"){
                if (pasoIf == 0){
                    valorRestaFijo = parseInt(primerNumero)
                    pasoIf ++  
                }
                else if (pasoIf > 0){
                    primerNumero = parseInt(texto.value)
                    valorRestaFijo = valorRestaFijo - primerNumero
                    texto.value=''
                    primerNumero=valorRestaFijo
                }
            }
                texto.value = ""
                signo = e.target.value

        } else if (e.target.value == '=') {
            if (signo == '+') {
                segundoNumero = parseInt(texto.value)
                let resultado = sumaFija + segundoNumero;
                texto.value = resultado
            }
            else if (signo == '-') {
                segundoNumero = parseInt(texto.value)
                let resultado = primerNumero - segundoNumero;
                texto.value = resultado
                
            }
            else if (signo == '*') {
                segundoNumero = parseInt(texto.value)
                let resultado = acumuladorMultiplicar * segundoNumero
                texto.value = resultado
            }
            else if (signo == "/") {
                segundoNumero = parseInt(texto.value)
                let resultado = parseInt(primerNumero) / segundoNumero
                texto.value = resultado
            }
            else if (signo == "clear") {
                texto.value = " "
            }
            acumulador = 0

            acumuladorMultiplicar = 1
        } else if (e.target.value == 'clear') {
            texto.value = ""
        }

    })



})