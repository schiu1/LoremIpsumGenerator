const LoremIpsum = require("lorem-ipsum").LoremIpsum;

//had to add event listener instead of use onclick bc i'm inside of a module,
//so func is not avail outside of the module
document.getElementById('b').addEventListener("click", GenerateParagraphs); 

function GenerateParagraphs(){
    console.log('here');
    const number = document.getElementById('paraNum').value;
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

    const para = lorem.generateParagraphs(number);
    console.log(para);
}