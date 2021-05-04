//key words/phrases to generate a message

const greet = ['Hello', 'Hey', 'Hi', 'What up', 'Word', 'Waazzzaaaa', 'Yo', 'Greetings', 'Hows it going'];

const nam = ['G', 'Bru', 'Gangstar*', 'You Legend', 'Maestro', 'Mofo', 'Fella', 'Boss', 'Chief'];

const text = ['hows it going?', 'good to seeya!', 'whats the good word?', 'hows it hanging?', 'where have you been all my life!!', 'welcome back!', 'looking good!'];

// generate random indexes
const generatePhrase = () => {
    const g = Math.floor(Math.random() * greet.length);
    const n = Math.floor(Math.random() * nam.length);
    const t = Math.floor(Math.random() * text.length);

    const message = greet[g] + ' ' + nam[n] + ' ' + text[t]
    document.getElementById('phrase').innerHTML = message;
    
};

