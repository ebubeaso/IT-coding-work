"use strict";
// set up the speech recognition variables
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
var recognizer = new SpeechRecognition();
var grammarList = new SpeechGrammarList();
// set up some keywords in a list for the speech recognizer to recognize
let keywords = ["search", "look up", "find", "show"];
var grammar = "#JSGF V1.0; grammar keyword; public <keyword> = " + keywords.join(" | ") + " ;";
// add in the grammar list that you made
grammarList.addFromString(grammar, 1);
// speech recognizer settings
recognizer.grammars = grammarList;
recognizer.continuous = false;
recognizer.lang = "en-US";
recognizer.interimResults = false;
recognizer.maxAlternatives = 1;
// get the HTML elements that you want to manipulate
var speakButton = document.getElementById("speak");
var voiceResponse = document.getElementById("response");

speakButton.addEventListener("click", () => {
    recognizer.start();
});
// get the voice results
recognizer.onresult = (event) => {
    let result = event.results[0][0].transcript;
    if (result == "hey computer do you love me") {
        voiceResponse.textContent = "No I do not"
    } else {
        voiceResponse.textContent = "You said ";
        voiceResponse.textContent += `"${result}"`;
    }
};
