
/* variables y dom */
let display = document.getElementById("display")
let buttons = Array.from(document.querySelectorAll(".button"))
let anterior = 0
let actual = 0
let numero = 0
let simbolo = ''
/* Desactiva los botones de suma resta multiplicacion y divison para
una sola funcion  a la vez*/ 
function desactivar(){
    document.getElementById('suma').disabled = true;
    document.getElementById('resta').disabled = true;
    document.getElementById('multiplicacion').disabled = true;
    document.getElementById('dividir').disabled =true;
}
/* actia los botones de */
function activar(){
    document.getElementById('suma').disabled = false;
    document.getElementById('resta').disabled = false;
    document.getElementById('multiplicacion').disabled = false;
    document.getElementById('dividir').disabled =false;
}
function transformar(numero){
    let num1 = ''
    let num2 = ''
    let punto = true
    if (numero.includes('.')){
        for(let x = 0; x < numero.length; x++){
            if (numero[x] === '.'){
                punto = false
            }
            if(punto){
                num1 += numero[x]
            }else{
                num2 += numero[x]
            }
            
        }
    }else{
        return numero
    }
    num2 = num2.substring(1,num2.length)
    num2 = parseInt(num2)
    while (num2 >= 1) {
        num2 = num2 / 10
    }
    numero = num2 + parseInt(num1)
    return numero
    
}
/* calcula las operaciones dependiendo su simbolo */
function calcular(operador,num1,num2){
    
    let resultado = 0
    switch(operador){
        case '/':
            resultado = num1 / num2
            break
        case '+' :
            resultado = num1 + num2
            break 
        case '-':
            resultado = num1 - num2
            break
        case '*':
            resultado = num1 * num2
            break

    }
    if (operador === '/' || num2 === 0){
        return 'que paso amiguito'
    }
    return resultado

}

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case '/':
                if (display.innerText === ''){
                    break
                }{
                    anterior = parseInt(display.innerText)
                    display.innerText = ''
                    simbolo = '-'
                    desactivar()
                }
                break
            case '*':
                if (display.innerText === ''){
                    break
                }{
                    anterior = parseInt(display.innerText)
                    display.innerText = ''
                    simbolo = '*'
                    desactivar()
                }
                break
            case '-':
                if (display.innerText === ''){
                    break
                }{
                    anterior = parseInt(display.innerText)
                    display.innerText = ''
                    simbolo = '-'
                    desactivar()
                }
            case '+':
                console.log(display.innerText)
                if (display.innerText === ''){
                    break
                }{
                    anterior =transformar(display.innerText)
                    
                    display.innerText = ''
                    simbolo = '+'
                    desactivar()
                }
                break
            case 'C':
                display.innerText = ''
                anterior = 0
                actual = 0
                activar()
                break
            case '↞':
                display.innerText = display.innerText.slice(0,-1)
                break
            case '=':
                if (simbolo === ''){
                    break
                }
                if (display.innerText=== ''){
                    actual = 0
                }else{
                    actual = transformar(display.innerText)
                }
                
                display.innerText = calcular(simbolo,anterior ,actual);
                simbolo = ''
                break
            default:
                display.innerText += e.target.innerText

        }
    })
})