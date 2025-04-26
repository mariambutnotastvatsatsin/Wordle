// let Words = ["touch","smash","clock","close"]

// let num = Math.floor(Math.random()*3);
// console.log(num)

// let Word = Words[num];
// console.log(Word);

// let arrWord = Word.split('')
// console.log(arrWord);

// function AppearedLetter(){
// document.addEventListener("keydown", function(event) {
//   let letter = event.key; 

//   let text = document.createElement("h3");
//   text.textContent = letter;
//   document.body.appendChild(text);
// });
// }

// Create a div dynamically
const header = document.createElement("div");
header.id = "header";
header.style.textAlign = "center";
header.style.fontSize = "40px";
header.style.marginTop = "50px";
document.body.appendChild(header);

// Initialize counter
let count = 0;

// Listen for key presses
document.addEventListener("keydown", function(event) {
    if (count < 5) { // Limit to 5 letters
        const letter = event.key;

        const text = document.createElement("h3");
        text.textContent = letter;
        text.style.display = "inline-block";
        text.style.margin = "0 5px";

        header.appendChild(text);
        count++;
    }
});

