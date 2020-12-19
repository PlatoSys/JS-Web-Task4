const LoremIpsum = require("lorem-ipsum").LoremIpsum

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
});


let loremButton = document.querySelector('#loremButton');

loremButton.addEventListener('click', ev => {
    let type = document.querySelector('#selector1').value;
    let number = parseInt(document.querySelector('#numberInput').value);
    let loremResult = document.querySelector('#loremResult');


    if(type == 'Paragraphs'){
        loremResult.innerHTML = lorem.generateParagraphs(number);
    }
    if(type == 'Words'){
        loremResult.innerHTML = lorem.generateWords(number);
    }
    if(type == 'Sentence'){
        loremResult.innerHTML = lorem.generateSentences(number);
    }
})