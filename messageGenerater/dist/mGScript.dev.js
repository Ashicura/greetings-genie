"use strict";

//key words/phrases to generate a message
var greet = ['Hello', 'Hey', 'Hi', 'What up', 'Word', 'Waazzzaaaa', 'Yo', 'Greetings', 'Hows it going'];
var nam = ['G', 'Bru', 'Gangstar*', 'You Legend', 'Mystro', 'Mofo', 'Fella', 'Boss', 'Chief'];
var text = ['hows it going?', 'good to seeya!', 'whats the good word?', 'hows it hanging?', 'where have you been all my life!!', 'welcome back!', 'looking good!']; // generate random indexes

var generatePhrase = function generatePhrase() {
  var g = Math.floor(Math.random() * greet.length);
  var n = Math.floor(Math.random() * nam.length);
  var t = Math.floor(Math.random() * text.length);
  var message = greet[g] + ' ' + nam[n] + ' ' + text[t];
  document.getElementById('phrase').innerHTML = message;
};