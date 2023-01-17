const elementoChute = document.getElementById('chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition; /*https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API*/

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'; /*Reconhecer a voz em português*/
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    //console.log(e.results[0][0].transcript);
    
    chute = e.results[0][0].transcript; //Se for na ordem, você encontra o que foi dito.

    exibeChuteNaTela(chute);

    verificaChuteValido(chute);

}

function exibeChuteNaTela () {
    elementoChute.innerHTML = ` 
        <div>Você disse</div>
        <span class="box">${chute}</span>
    
    `
    //A crase serve como espaço "criável", por isso que foi criado as tags de como será exibido. 
}

recognition.addEventListener('end', () => recognition.start())


