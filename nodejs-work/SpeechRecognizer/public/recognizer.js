"use strict";
// set up the speech recognition variables
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;
let keywords = ["search", "look up", "find", "show"];
var grammar = "#JSGF V1.0; grammar keyword; public <keyword> = " + keywords.join(" | ") + " ;";

var speakButton = document.getElementById("speak");
