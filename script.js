let Words = ["touch","smash","clock","close"]

let num = Math.floor(Math.random()*3);
console.log(num)

// let Word = Words[num];
// console.log(Word);

let Word = "clock";
let arrWord = Word.split('')
console.log(arrWord);

const header = document.createElement("div");
header.id = "header";
header.style.textAlign = "center";
header.style.fontSize = "40px";
header.style.marginTop = "50px";
document.body.appendChild(header);

let count = 0;

document.addEventListener("keydown", function(event) {
    if (count < 5) { 
        const letter = event.key;

        const text = document.createElement("h3");
        text.textContent = letter;
        text.style.display = "inline-block";
        text.style.margin = "0 5px";

        header.appendChild(text);
        
        
        count++;
        const intervalID = setInterval(changeColor,1000);
        function changeColor(){
        let arr = [];
        arr.push(letter);
        // console.log(arr);
        for(let i=0; i<5; i++){
        if(letter == arrWord[i]){
            text.style.color = "green";
        }
    }}
    }
});


