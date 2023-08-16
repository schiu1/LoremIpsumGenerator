const LoremIpsum = require("lorem-ipsum").LoremIpsum;

//had to add event listener instead of use onclick bc i'm inside of a module,
//so func is not avail outside of the module
document.getElementById('b').addEventListener("click", GenerateParagraphs); 

function GenerateParagraphs(){
    const count = document.getElementById('paraNum').value;
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 4,
            min: 4
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    
    const output = lorem.generateParagraphs(parseInt(count));
    console.log(output);
    document.getElementById('out').innerHTML = output;
}