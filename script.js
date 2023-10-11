let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

function populateVoices(){
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = populateVoices;
}

// Use a setTimeout to ensure voices are available
setTimeout(() => {
    populateVoices();
}, 1000); // Adjust the timeout duration as needed

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});