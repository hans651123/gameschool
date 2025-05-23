const symbols = [
  "https://i.imgur.com/hsHlyLT.png", // Strawberry
  "https://i.imgur.com/2.png",        // Lemon
  "https://i.imgur.com/3.png",        // Orange
  "https://i.imgur.com/wzxPTXE.png",  // Watermelon
  "https://i.imgur.com/KFSz74D.png",  // Banana
  "https://i.imgur.com/pA6LPHd.png",  // Seven
  "https://i.imgur.com/R8DIRu2.png"   // Cherry
];

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spin() {
  const r1 = getRandomSymbol();
  const r2 = getRandomSymbol();
  const r3 = getRandomSymbol();

  document.getElementById('reel1').innerHTML = `<img src="${r1}" alt="symbol">`;
  document.getElementById('reel2').innerHTML = `<img src="${r2}" alt="symbol">`;
  document.getElementById('reel3').innerHTML = `<img src="${r3}" alt="symbol">`;

  const result = document.getElementById('result');
  if (r1 === r2 && r2 === r3) {
    result.textContent = '🎉 Jackpot! You win! 🎉';
  } else if (r1 === r2 || r2 === r3 || r1 === r3) {
    result.textContent = '🙂 Nice! You got a pair!';
  } else {
    result.textContent = '😢 Try again!';
  }
}
