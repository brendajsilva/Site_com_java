let resposta = document.getElementById('resposta')

function verificar(){
    let dia = Number(document.getElementById('dia').value)
    console.log(dia)

    switch (dia) {
        case 1:
            resposta.innerHTML = "O dia da semana selecionado é domingo!"
            break
        case 2:
            resposta.innerHTML = "O dia da semana selecionado é segunda!"
            break
        case 3:
            resposta.innerHTML = "O dia da semana selecionado é terça!"
            break
        case 4:
            resposta.innerHTML = "O dia da semana selecionado é quarta!"
             break
        case 5:
            resposta.innerHTML = "O dia da semana selecionado é quinta!"
            break
        case 6:
            resposta.innerHTML = "O dia da semana selecionado é sexta!"
            break
         case 7:
             resposta.innerHTML = "O dia da semana selecionado é sábado!"
            break
        default:
            resposta.innerHTML = "O valor digitado é inválido! não corresponde à um dia de semana!"
            break
    }
}