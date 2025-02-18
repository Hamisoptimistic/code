function frontBack(str){
  
  if (str.length <= 1) {
    return str;
  }
  let first = str[0]
  let last = str[str.length - 1]
  // console.log(last)
  let middle = str.slice(1,str.length - 1)
  return last + middle + first
}