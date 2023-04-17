

let display = document.getElementById("display")

let buttons = Array.from(document.querySelectorAll(".button"))


buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText= ''
                break
            case'↞':
                display.innerText = display.innerText.slice(0,-1)
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})