var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox = document.getElementById('stt');
var instructions = document.getElementById('instructions');

var Content = '';

recognition.continuous = true;

recognition.onresult = function(event) {

    let current = event.resultIndex;

    let transcript = event.results[current][0].transcript;

    Content += transcript;
    textbox.value = Content;
    // Add a blinking arrow near submit button 
};

recognition.onstart = function() {
    instructions.innerText = 'Voice recognition is ON.';
}

recognition.onspeechend = function() {
    instructions.innerText = 'No activity.';
}

recognition.onerror = function(event) {
    if (event.error == 'no-speech') {
        instructions.innerText = 'Error.';
    }
}

document.getElementById("start-btn").addEventListener('click', (e) => {
    if (Content.length) {
        Content += ' ';
    }
    recognition.start();
});
document.getElementById("stop-btn").addEventListener('click', (e) => {
    recognition.stop();
});

textbox.addEventListener('input', (e) => {
    Content = this.value;
});