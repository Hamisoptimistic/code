function missingChar(str, n) {
  let first = str.slice(0, n);
  let last = str.slice(n+1);
  // console.log(first);
  // console.log(last);
  return first+last;
}
