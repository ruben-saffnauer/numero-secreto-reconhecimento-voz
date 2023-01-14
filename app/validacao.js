function verificaChute(chute) {
    const numero = +chute;
    if(Number.isNaN(numero)) {
        elementoChute.innerHTML += "<div>Valor invalido!</div>";
        return
    }
    if(numero > maiorValor || (numero < menorValor)) {
        elementoChute.innerHTML += "<div>Valor invalido!</div>";
        return
    }
    if(numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você Acertou! Parabéns!!</h2>
            <h3>Número secreto: ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if(numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>'
    } else {
        elementoChute.innerHTML += '<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>'
    }
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})