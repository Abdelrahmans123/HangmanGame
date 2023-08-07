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
let score = 0;
document.getElementById("score").innerHTML = score;
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
document.getElementById("wrongAttempts").innerHTML = wrongAttempt;
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
            document.getElementById("wrongAttempts").innerHTML = wrongAttempt;
            draw.classList.add(`wrong-${wrongAttempt}`);
            document.getElementById("fail").play();
            if (wrongAttempt === 8) {
                endGame();
                if (score > 0) {
                    score--;
                    console.log(score);
                    document.getElementById("score").innerHTML = score;
                }
            }
        } else {
            document.getElementById("success").play();
            score++;
            document.getElementById("score").innerHTML = score;
            const letterGuessArray = [...letterGuessSpan]; // Convert letterGuessSpan to an array using the spread operator
            const isWordCompleted = letterGuessArray.every(
                (span) => span.innerHTML.trim() !== ""
            );
            if (isWordCompleted) {
                showSuccessModal();
            }
        }
    }
});
function endGame() {
    Swal.fire({
        icon: "error",
        title: "Game Over",
        text: `The Word is ${randomValue}`,
    });

    generateNewWord();
}
function showSuccessModal() {
    Swal.fire(
        "Congratulations!",
        "Well done! You guessed the word correctly!",
        "success"
    );
    generateNewWord();
}

function generateNewWord() {
    let letterBoxes = document.querySelectorAll(".letter-box");
    letterBoxes.forEach((box) => {
        box.classList.remove("clicked");
    });
    randomPropName = allKeys[Math.floor(Math.random() * allKeys.length)];
    randomPropValue = words[randomPropName];
    randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
    randomValue = randomPropValue[randomValueNumber];
    document.querySelector(".game-info .category span").innerHTML =
        randomPropName;

    lettersAndSpace = Array.from(randomValue.toLowerCase());
    lettersGuessContainer.innerHTML = ""; // Clear the previous word's letters
    lettersAndSpace.forEach((letter) => {
        let letterElement = document.createElement("span");
        if (letter === " ") {
            letterElement.className = "withSpace";
        }
        lettersGuessContainer.appendChild(letterElement);
    });

    letterGuessSpan = document.querySelectorAll(".letters-guess span");
    wrongAttempt = 0;
    draw.className = "hangman-draw"; // Reset the hangman drawing
}
document.querySelector(".btn").addEventListener("click", function () {
    score = 0;
    wrongAttempt = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("wrongAttempts").innerHTML = wrongAttempt;
    generateNewWord();
});
