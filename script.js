let currentPlayer = 'X';
let gameActive = true;

function makeMove(cell) {
  if (!gameActive || cell.textContent !== '') return;

  cell.textContent = currentPlayer;
  if (checkWin()) {
    document.getElementById('status').textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (isDraw()) {
    document.getElementById('status').textContent = `It's a draw!`;
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('status').textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWin() {
  const cells = document.querySelectorAll('.cell');
  const combos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return combos.some(combo => {
    const [a, b, c] = combo;
    return cells[a].textContent &&
           cells[a].textContent === cells[b].textContent &&
           cells[b].textContent === cells[c].textContent;
  });
}

function isDraw() {
  return [...document.querySelectorAll('.cell')].every(cell => cell.textContent !== '');
}

function resetGame() {
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameActive = true;
  document.getElementById('status').textContent = `Player X's turn`;
}
