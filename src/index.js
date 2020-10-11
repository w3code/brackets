module.exports = function check(str, bracketsConfig) {
  let bracketsArray = [];
  for(let i = 0; i < bracketsConfig.length; i++){
    bracketsArray[i] = bracketsConfig[i].join('')
  }
  for(let j = 0; j < bracketsArray.length; ){
    if(str.indexOf(bracketsArray[j]) >= 0) {
      str = str.replace(bracketsArray[j], '')
      j = 0;
    }
    else {
      j++;
    }
  }
  if(str.length === 0){
    return true;
  }
  else{
    return false;
  }
}
