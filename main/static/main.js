let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
function showusermsg(usermsg){
    let output = " ";
    output += ` <div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function showchatbotmsg(chatbotmsg){
    let output = " ";
    output += ` <div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "sorry , I didn't get that ";
    if(message.includes('hello')){
        speech.text = "Welcome how may i help you";
    }
    if(message.includes('about yourself')){
        speech.text = "Sure , So i am your new friend spark you can ask me your query's";
    }
    if(message.includes('text retrieval')){
        speech.text = "Redirecting you to Text Retrieval page";
        window.location.replace("http://127.0.0.1:8000/text_retrieval");;
    }
    if(message.includes('image retrieval')){
        speech.text = "Redirecting you to Image Retrieval page";
        window.location.replace("http://127.0.0.1:8000/image_retrieval");;
    }
    if(message.includes('text summarizer')){
        speech.text = "Redirecting you to Text Summarizer page";
        window.location.replace("http://127.0.0.1:8000/text_summarizer");;
    }
    if(message.includes('question generation')){
        speech.text = "Redirecting you to Question Generation page";
        window.location.replace("http://127.0.0.1:8000/question_generation");;
    }
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}
recognition.onresult = function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript))
    chatbotvoice(transcript);
    console.log(transcript);

}
recognition.onend = function(){
    mic.style.background = `#03f7ff`;
}
mic.addEventListener("click" , function(){
    mic.style.background = `#03aef9`;
    recognition.start();
    console.log("ChatBot is now ACTIVATED");

})
