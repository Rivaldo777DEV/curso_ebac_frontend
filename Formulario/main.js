const form = document.getElementById("form");
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

function comparandoCampos(campoB, campoA){
    return campoB > campoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    let validaForm = comparandoCampos(campoB.valueAsNumber, campoA.valueAsNumber);
    if(validaForm){
        alert('OK, tudo certo!')
    } else{
        alert('Negativo, não pode prosseguir!')
    }
})

