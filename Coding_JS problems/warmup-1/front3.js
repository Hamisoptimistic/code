function front3(str){
  if (str.length<=3) {
    return str.repeat(3)
  } else if (str) {
    let output = str.slice(0,3)
    return output.repeat(3)
  }
  
}