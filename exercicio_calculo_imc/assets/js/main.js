const form = document.querySelector('.form');

form.addEventListener('submit', function calculoImc(evento){
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('.peso');
    const inputAltura = evento.target.querySelector('.altura');

    const pesoReal = Number(inputPeso.value);
    const alturaReal = Number(inputAltura.value);

    if(!pesoReal){
        setResultado('Peso inválido', false);
        return;
    }

    if(!alturaReal){
        setResultado('altura inválida', false);
        return;
    }

    const imc = getImc(pesoReal, alturaReal);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(msg, true);
});

function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc < 18.5) {
        console.log(`Seu IMC é ${imc} (Abaixo do Peso).`);
        return nivel[0];
    }
    if (imc >= 18.5 && imc <= 24.9){
        console.log(`Seu IMC é ${imc} (Peso Normal).`);
        return nivel[1];
    }
    if (imc >= 25 && imc <= 29.9){
        console.log(`Seu IMC é ${imc} (Sobrepeso).`);
        return nivel[2];
    }
    if (imc >= 30 && imc <= 34.9){
        console.log(`Seu IMC é ${imc} (Obesidade Grau 1).`);
        return nivel[3];
    }
    if (imc >= 35 && imc <= 39.9){
        console.log(`Seu IMC é ${imc} (Obesidade Grau 2).`);
        return nivel[4];
    }
    if (imc >= 40){
        console.log(`Seu IMC é ${imc} (Obesidade Grau 3).`);
        return nivel[5];
    }
}

function getImc (pesoReal, alturaReal) {
    const imc = pesoReal / alturaReal ** 2;
    return imc.toFixed(2);
}

function criaParagrafos () {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaParagrafos();

    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}