const LoremIpsum = require("lorem-ipsum").LoremIpsum;

//had to add event listener instead of use onclick bc i'm inside of a module,
//so func is not avail outside of the module
document.getElementById('b').addEventListener("click", GenerateParagraphs); 

function GenerateParagraphs(){
    const count = document.getElementById('paraNum').value;
    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 11,
            min: 11
        },
        wordsPerSentence: {
            max: 16,
            min: 4
        }
    });
    
    const output = lorem.generateParagraphs(parseInt(count));
    const splitPara = output.split("\n");
    const outputElem = document.getElementById("output");

    while(outputElem.hasChildNodes()){
        outputElem.removeChild(outputElem.firstChild);
    }
    
    let paraCount = 0;
    for(const para of splitPara){
        paraCount += 1;
        const newElem = document.createElement("p");
        newElem.innerHTML = para;
        document.getElementById("output").appendChild(newElem);
    }
    document.getElementById('count').innerHTML = "Generated " + paraCount + " paragraphs of Lorem Ipsum";
}