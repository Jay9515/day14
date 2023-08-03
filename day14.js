function lookAndSay(start, n) {
  const sequence = [start.toString()];

  for (let i = 1; i < n; i++) {
    const prevTerm = sequence[i - 1];
    let nextTerm = "";
    let count = 1;

    for (let j = 0; j < prevTerm.length; j++) {
      if (prevTerm[j] === prevTerm[j + 1]) {
        count++;
      } else {
        nextTerm += count + prevTerm[j];
        count = 1;
      }
    }

    sequence.push(nextTerm);
  }

  return sequence.map(Number);
}

console.log(lookAndSay(3, 6));
console.log(lookAndSay(11, 5));
console.log(lookAndSay(110, 4));
console.log(lookAndSay(1001, 3));
