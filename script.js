// audios
let clap = document.getElementsByTagName('audio')[0];
let hithat = document.getElementsByTagName('audio')[1];
let kick = document.getElementsByTagName('audio')[2];
let openhat = document.getElementsByTagName('audio')[3];
let boom = document.getElementsByTagName('audio')[4];
let ride = document.getElementsByTagName('audio')[5];
let snare = document.getElementsByTagName('audio')[6];
let tom = document.getElementsByTagName('audio')[7];
let tink = document.getElementsByTagName('audio')[8];
// divs dos botões
let divClap = document.getElementsByClassName('key')[0];
let divHithat = document.getElementsByClassName('key')[1];
let divKick = document.getElementsByClassName('key')[2];
let divOpenhat = document.getElementsByClassName('key')[3];
let divBoom = document.getElementsByClassName('key')[4];
let divRide = document.getElementsByClassName('key')[5];
let divSnare = document.getElementsByClassName('key')[6];
let divTom = document.getElementsByClassName('key')[7];
let divTink = document.getElementsByClassName('key')[8];
// ===========================================================================================================
addEventListener('keydown', (event) => { // evento de tecla sendo precionada
    switch(event.key) {
        case 'a': //caso seja precionado a letra A
            clap.play();
            divClap.style.transform = 'scale(1.1)';
            divClap.style.borderColor = '#ffc600';
            divClap.style.boxShadow = '0 0 20px #ffc600'; // adiciona os estilos e toca o audio
            setTimeout(() => { //(essa estrutura se repete pelo rsto do codigo)
                divClap.style.transform = 'scale(1)';
                divClap.style.borderColor = 'black';
                divClap.style.boxShadow = '0 0 0'; // remove os estilos apos 300ms
            }, 300)
            break;
        case 's': //caso seja precionado a letra S
            hithat.play();
            divHithat.style.transform = 'scale(1.1)';
            divHithat.style.borderColor = '#ffc600';
            divHithat.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divHithat.style.transform = 'scale(1)';
                divHithat.style.borderColor = 'black';
                divHithat.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'd': //caso seja precionado a letra D
            kick.play();
            divKick.style.transform = 'scale(1.1)';
            divKick.style.borderColor = '#ffc600';
            divKick.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divKick.style.transform = 'scale(1)';
                divKick.style.borderColor = 'black';
                divKick.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'f': //caso seja precionado a letra F
            openhat.play();
            divOpenhat.style.transform = 'scale(1.1)';
            divOpenhat.style.borderColor = '#ffc600';
            divOpenhat.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divOpenhat.style.transform = 'scale(1)';
                divOpenhat.style.borderColor = 'black';
                divOpenhat.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'g': //caso seja precionado a letra G
            boom.play();
            divBoom.style.transform = 'scale(1.1)';
            divBoom.style.borderColor = '#ffc600';
            divBoom.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divBoom.style.transform = 'scale(1)';
                divBoom.style.borderColor = 'black';
                divBoom.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'h': //caso seja precionado a letra H
            ride.play();
            divRide.style.transform = 'scale(1.1)';
            divRide.style.borderColor = '#ffc600';
            divRide.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divRide.style.transform = 'scale(1)';
                divRide.style.borderColor = 'black';
                divRide.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'j': //caso seja precionado a letra J
            snare.play();
            divSnare.style.transform = 'scale(1.1)';
            divSnare.style.borderColor = '#ffc600';
            divSnare.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divSnare.style.transform = 'scale(1)';
                divSnare.style.borderColor = 'black';
                divSnare.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'k': //caso seja precionado a letra K
            tom.play();
            divTom.style.transform = 'scale(1.1)';
            divTom.style.borderColor = '#ffc600';
            divTom.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divTom.style.transform = 'scale(1)';
                divTom.style.borderColor = 'black';
                divTom.style.boxShadow = '0 0 0';
            }, 300)
            break;
        case 'l': //caso seja precionado a letra L
            tink.play();
            divTink.style.transform = 'scale(1.1)';
            divTink.style.borderColor = '#ffc600';
            divTink.style.boxShadow = '0 0 20px #ffc600';
            setTimeout(() => {
                divTink.style.transform = 'scale(1)';
                divTink.style.borderColor = 'black';
                divTink.style.boxShadow = '0 0 0';
            }, 300)
            break;
    }
});