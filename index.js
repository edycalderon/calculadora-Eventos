let numeros = document.querySelectorAll('.numer');
let texto = document.querySelector('#barra-number');
let btnAccion = document.querySelectorAll('.accion');
const limpiar = document.querySelector('.clear')
let primerNumero = 0
let segundoNumero = 0
let signo = ""
let acumulador = 0
let primeraVez = true 

numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        texto.value += btn.value
    })
})

            const suma = () => {
                acumulador = acumulador + primerNumero
            }

            const resta = () =>{
                if (primeraVez){
                    acumulador = primerNumero - Math.abs(acumulador)
                    primeraVez = false;

                }
                else if (acumulador >= 0){
                    acumulador = Math.abs(acumulador) - primerNumero
                }
                else  {
                    acumulador = acumulador - primerNumero
                }
            }

            const multiplicar  = () =>{
                if (acumulador == 0)
                {
                    acumulador = 1
                    acumulador = acumulador * primerNumero
                }
                else{
                    acumulador = acumulador * primerNumero
                }
            }            
            const divicion = () => {
                if (acumulador == 0)
                {
                    acumulador = primerNumero
                }
                else{
                    acumulador = acumulador / primerNumero
                }
            }
            const igual = () => {
                if (signo == '+' ){
                    segundoNumero = parseInt(texto.value)
                    acumulador = acumulador + segundoNumero
                    texto.value = acumulador
                }
                else if (signo == '-'){
                    segundoNumero = parseInt(texto.value)
                    acumulador = acumulador - segundoNumero
                    texto.value = acumulador
                    primeraVez = true
                }
                else if (signo == '*'){
                    segundoNumero = parseInt(texto.value)
                    acumulador = acumulador * segundoNumero
                    primeraVez = true
                    texto.value = acumulador
                }
                else if (signo == '/'){
                    segundoNumero = parseInt(texto.value)
                    acumulador = acumulador / segundoNumero
                    texto.value = acumulador
                }
            }
            

btnAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e)
        if (texto.value == "")
        {
            alert('ingrese un numero')
        }
        else if (e.target.value != '=' )
        {
            primerNumero = parseInt(texto.value)
            switch (e.target.value)
            {
                case '+' : 
                if (signo != '')
                {
                    igual();
                }else{
                    suma();
                }
                break;
                case '-' : 
                if (signo != '')
                {
                    igual();
                }else{
                    resta();
                }
                break;
                case '*' : 
                if (signo != '')
                {
                    igual();
                }else{
                    multiplicar();
                }
                break;
                case '/' : 
                if (signo != '')
                {
                    igual();
                }else{
                    divicion();
                }
                break;
                
                
            }
            texto.value = ""
            signo = e.target.value
            
        }else{
            igual ()
            acumulador = 0
            signo = ''
        }
    })
})

limpiar.addEventListener('click', () => {
    primerNumero = 0;
    segundoNumero = 0;
    signo = ''
    texto.value = ''
    acumulador = 0;
    primeraVez = true
})