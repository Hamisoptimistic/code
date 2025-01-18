function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) || (!aSmile && !bSmile);
}

console.log(monkeyTrouble(true, true)); // true
monkeyTrouble(false, false); // true
monkeyTrouble(true, false); // false
monkeyTrouble(false, true); // false
