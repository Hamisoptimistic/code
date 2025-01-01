while (x != null) {
  console.log(x.path);
  x = x.parent;
}
x === 