/* sophisticated_code.js */

// This code is a complex and elaborate implementation of a tic-tac-toe game.

// Defines the board dimensions
const BOARD_SIZE = 3;

// Represents the game board
let board = [];

// Tracks the current turn
let currentPlayer = 'X';

// Tracks the number of moves made
let moves = 0;

// Initializes the game board
function initializeBoard() {
    for (let i = 0; i < BOARD_SIZE; i++) {
        board[i] = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            board[i][j] = '';
        }
    }
}

// Displays the game board
function displayBoard() {
    console.log('----------------');
    for (let i = 0; i < BOARD_SIZE; i++) {
        let row = '| ';
        for (let j = 0; j < BOARD_SIZE; j++) {
            row += board[i][j] + ' | ';
        }
        console.log(row);
        console.log('----------------');
    }
}

// Checks if the move is valid
function isValidMove(row, col) {
    return board[row][col] === '';
}

// Makes a move on the game board
function makeMove(row, col) {
    board[row][col] = currentPlayer;
    moves++;
}

// Checks if the game has been won
function hasWon() {
    // Check rows
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }

    // Check diagonals
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }

    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }

    return false;
}

// Switches the player turn
function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Executes the game
function playGame() {
    initializeBoard();
    displayBoard();

    while (moves < BOARD_SIZE * BOARD_SIZE && !hasWon()) {
        let row = parseInt(prompt('Enter the row (0, 1, 2):'));
        let col = parseInt(prompt('Enter the column (0, 1, 2):'));

        if (isValidMove(row, col)) {
            makeMove(row, col);
            displayBoard();
            switchPlayer();
        } else {
            console.log('Invalid move. Try again.');
        }
    }

    if (hasWon()) {
        console.log(`Player ${currentPlayer} wins!`);
    } else {
        console.log('It\'s a draw!');
    }
}

// Start the game
playGame();