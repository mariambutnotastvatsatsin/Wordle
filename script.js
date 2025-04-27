// document.addEventListener("DOMContentLoaded", function () {
    
// });

let header = document.getElementById("header");
let Words = ["touch", "smash", "clock", "close"]

// let num = Math.floor(Math.random() * 3);

// console.log(num)

// let Word = Words[num];
// console.log(Word);

let Word = "clock";
let arrWord = Word.split('')    
console.log(arrWord);

// const header = document.createElement("div");
// header.id = "header";
// header.style.textAlign = "center";
// header.style.fontSize = "40px";
// header.style.marginTop = "50px";
// document.body.appendChild(header);

//let count = 0;

let arr = [];
let objOfLetterCount = {};
let countofLetterRepeating = 0;
let cnt = 0;
document.addEventListener("keydown", function (event) {
    if(cnt<5) {

        let letter = event.key;
        arr.push(letter);

        let text = document.createElement("h1");
        text.textContent = letter;
        text.style.display = "inline-block";
        text.style.margin = "0 10px";

        header.appendChild(text);
        cnt++;

        for(let i = 0; i<arr.length;i++) {
                countofLetterRepeating = 0;
            for(let j = 0; j<arr.length;j++){
                if(arr[i] == arr[j])
                    countofLetterRepeating++;
            }
                objOfLetterCount[arr[i]] = countofLetterRepeating;        
}
if (cnt === 5) {
        console.log(arr);
        console.log(objOfLetterCount);
    }
    }
});

document.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
            
        let h3s = document.querySelectorAll("#header h1");
        
        for (let i = 0; i < 5; i++) {
            h3s[i].style.color = "grey";
            if (arr[i] === arrWord[i]) {
                h3s[i].style.color = "green";  
            } else if (arrWord.includes(arr[i])) {
                h3s[i].style.color = "yellow";  
            }
        }
    }
});

