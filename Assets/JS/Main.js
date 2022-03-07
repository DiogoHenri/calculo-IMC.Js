//capturar envio de submit do formulario
const form = document.querySelector('#formulario');
form.addEventListener('submit', function(e){

    e.preventDefault();
    //setando o peso e a altura
    const inputPeso = e.target.querySelector('#Peso');
    const InputAltura = e.target.querySelector('#Altura');

    const Peso = Number(inputPeso.value);
    const Altura = Number(InputAltura.value);

    if (!Peso) {
        setResultado('Peso Invalido', false);
        return;
    }
    if (!Altura) {
        setResultado('Altura invalida', false);
        return;
    }

    //pega valores do calculo
    const imc = getImc(Peso,Altura);
    const nivelImc = getNivelImc(imc);


    const msg = `Seu IMC é ${imc}(${nivelImc}).`;
    setResultado(msg,true);
});
//niveis IMC
function getNivelImc(imc){
    const nivel = ['abaixo do peso','Peso normal','sobrePeso','obesidade1','obesidade2','obesidade3']
if (imc >= 39.9) {
    return nivel[5];

} if (imc>=34.9) {
     return nivel[4];

} if (imc>=29.9) {
     return nivel[3];

} if (imc>=24.9) {
     return nivel[2];

} if (imc>=18.5) {
     return nivel[1];

} if(imc< 18.5){
    return nivel[0];
}   

}   

function getImc(peso,altura){
    //calculo
    const imc = peso / altura ** 2;
    return  imc.toFixed(2);
}

//mensagem
    function criaP(){
    const p = document.createElement('p');
    return p;

    }

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criaP();

    if (isValid){
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);


    
    
}