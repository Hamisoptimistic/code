// Source: https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
function correctStr(name) {
  // return str.split('').reverse().join('');
  let lowercase = name.toLowerCase();
  let fir1 = lowercase.slice(0, lowercase.indexOf(" "));
  // console.log(fir1);
  capFirst = fir1[0].toUpperCase() + fir1.slice(1);
  let fir2 = lowercase.slice(lowercase.indexOf(" ") + 1);
  capSecond = fir2[0].toUpperCase() + fir2.slice(1);
  // console.log(fir2);
  return `${capFirst + " " + capSecond}`;
}

console.log(correctStr("donlad trump")); // [ 'Donlad', 'Trump', 'Is', 'A', 'Mainace' ]
