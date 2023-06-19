const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;     // modulo do chrome para enetender o reconhecimento de voz
const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak )
//O innerHTML é uma propriedade do Element que define ou retorna o conteúdo HTML de um elemento
function exibirChute(chute){
    elementoChute.innerHTML = `            
    <div>você disse:</div>
    <span class="box">${chute}</span>
    `
}
function onSpeak(evento){
    chute = evento.results[0] [0].transcript              // puxar somente o reconhecimento de voz 
    exibirChute(chute)
}
