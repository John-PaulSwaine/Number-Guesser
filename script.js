let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Arrow function to handle guess
const handleGuess = () => {
    const guessInput = document.getElementById('guessInput').value;
    const guess = Number(guessInput);
    const messageElement = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');
    
    attempts++;

    if (guess < randomNumber) {
        messageElement.textContent = 'Try a higher number!';
    } else if (guess > randomNumber) {
        messageElement.textContent = 'Try a lower number!';
    } else {
        messageElement.textContent = `Congratulations! You've guessed it in ${attempts} attempts. A new number has been generated.`;
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0; // Reset attempts for the new game
    }

    attemptsElement.textContent = `Attempts: ${attempts}`;
};

// Event listener for the button
document.getElementById('guessBtn').addEventListener('click', handleGuess);
