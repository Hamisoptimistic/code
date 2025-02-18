function maxInRange1020(a, b) {
  let max = 0;

  if (a >= 10 && a <= 20) {
    max = a;
  }
  if (b >= 10 && b <= 20) {
    if (b > max) {max = b};
  }
  return max;
}
