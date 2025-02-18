function commonEnd(a, b) {
  if (a[0] === b[0]) {
    return true;
  } else if (a.at(-1) === b.at(-1)) {
    return true;
  } else {
    return false;
  }
}