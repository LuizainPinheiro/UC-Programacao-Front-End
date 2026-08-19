let btnGato = document.getElementById('btn-gato');
let imagemPet = document.getElementById('imagem-pet');


btnGato.addEventListener('click', function() {
    let fotoGato = "https://images.pexels.com/photos/11869836/pexels-photo-11869836.jpeg?auto=compress&cs=tinysrgb&w=400"
    imagemPet.src = fotoGato;

});

let btnCachorro = document.getElementById('btn-cao');

btnCachorro.addEventListener('click', function() {
    let fotoCachorro = "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"

    imagemPet.src = fotoCachorro;

});


let btnBg = document.getElementById('btn-background');
let cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806'];

let body = document.querySelector('body');

let contador = 0

btnBg.addEventListener('click', function() {
    body.style.backgroundColor = cores[contador];
    contador++;

    if(contador > 4){
        contador = 0
    }
    
});
