function close10(a, b) {
  let first = Math.abs(a - 10);
  let second = Math.abs(b - 10);
  console.log(first);
  console.log(second);

  if (a === 0 || b === 0) {
    return 0;
  } else if (a === b) {
    return 0;
  } else if (first === second) {
    return 0;
  } else if (first < second) {
    return a;
  } else {
    return b;
  }
}