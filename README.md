# Hangman Game

This is a simple Hangman game implemented using HTML, CSS, and JavaScript only. The game provides a fun way to guess words by revealing letters one by one.

## How to Play

1. Open the `index.html` file in a web browser.
2. The game will start automatically.
3. You will see a row of underscores representing the hidden word.
4. Click on the letters on the virtual keyboard to guess a letter.
5. If the letter is part of the word, it will be revealed in its correct position(s).
6. If the letter is not part of the word, the hangman drawing will start to appear.
7. Keep guessing letters until you either solve the word or the hangman drawing is completed.
8. If you complete the word, you win! If the hangman drawing is completed, you lose.

## Customizing the Word List

By default, the game uses a pre-defined word list. However, you can customize the word list by modifying the `words` array in the `main.js` file. Add or remove words as desired, making sure to enclose each word in quotes and separate them with commas.

Example:

```javascript
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
```

You can add new categories and words within each category. Make sure to follow the same format as shown in the example.

## Acknowledgements

The Hangman game is a classic word-guessing game that has been implemented using HTML, CSS, and JavaScript only. The game logic and user interface have been created from scratch for this project.

The Hangman game is developed by [Your Name]. Feel free to use and modify the code for personal and educational purposes.
