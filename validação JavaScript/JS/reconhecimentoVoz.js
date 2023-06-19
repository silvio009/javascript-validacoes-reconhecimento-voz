
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;     // modulo do chrome para enetender o reconhecimento de voz
const recognition = new SpeechRecognition();

recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak )

function onSpeak(evento){
 console.log(evento.results[0] [0].transcript)                // puxar somente o reconhecimento de voz 
}
