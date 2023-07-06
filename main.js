const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach((letter) => {
    let letterElement = document.createElement("span");
    let letterText = document.createTextNode(letter);
    letterElement.appendChild(letterText);
    letterElement.className = "letter-box";
    lettersContainer.appendChild(letterElement);
});
const words = {
    programming: [
        "php",
        "javascript",
        "go",
        "scala",
        "fortran",
        "r",
        "mysql",
        "python",
    ],
    movies: [
        "Prestige",
        "Inception",
        "Parasite",
        "Interstellar",
        "Whiplash",
        "Memento",
        "Coco",
        "Up",
    ],
    people: [
        "Albert Einstein",
        "Hitchcock",
        "Alexander",
        "Cleopatra",
        "Mahatma Ghandi",
    ],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

let allKeys = Object.keys(words);
let randomPropName = allKeys[Math.floor(Math.random() * allKeys.length)];
let randomPropValue = words[randomPropName];
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
let randomValue = randomPropValue[randomValueNumber];
document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");
let lettersAndSpace = Array.from(randomValue);
lettersAndSpace.forEach((letter) => {
    let letterElement = document.createElement("span");
    if (letter === " ") {
        letterElement.className = "withSpace";
    }
    lettersGuessContainer.appendChild(letterElement);
});
let letterGuessSpan = document.querySelectorAll(".letters-guess span");
let wrongAttempt = 0;
let draw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
    let status = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        let clickedLetter = e.target.innerHTML.toLowerCase();
        let chosenWord = Array.from(randomValue.toLowerCase());
        chosenWord.forEach((wordLetter, wordIndex) => {
            if (wordLetter === clickedLetter) {
                status = true;
                letterGuessSpan.forEach((span, spanIndex) => {
                    if (wordIndex === spanIndex) {
                        span.innerHTML = wordLetter;
                    }
                });
            }
        });
        console.log(status);
        if (!status) {
            wrongAttempt++;
            draw.classList.add(`wrong-${wrongAttempt}`);
            document.getElementById("fail").play();
            if (wrongAttempt === 8) {
                endGame();
                lettersContainer.classList.add("finished");
            }
        } else {
            document.getElementById("success").play();
        }
    }
});
function endGame() {
    let div = document.createElement("div");
    let divText = document.createTextNode(
        `Game Over,The Word is ${randomValue}`
    );
    div.appendChild(divText);
    div.classList.add("game-over");
    document.body.appendChild(div);
}
