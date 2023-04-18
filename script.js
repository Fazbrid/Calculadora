
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
function activar(){
    document.getElementById('suma').disabled = false;
    document.getElementById('resta').disabled = false;
    document.getElementById('multiplicacion').disabled = false;
    document.getElementById('dividir').disabled =false;
}

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

                if (display.innerText === ''){
                    break
                }{
                    
                    anterior = parseInt(display.innerText)
                    display.innerText = ''
                    simbolo = '+'
                    desactivar()
                }
                break
            case 'C':
                display.innerText = ''
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
                    actual = parseInt(display.innerText)
                }
                
                display.innerText = calcular(simbolo,anterior ,actual);
                simbolo = ''
                break
            default:
                display.innerText += e.target.innerText

        }
    })
})