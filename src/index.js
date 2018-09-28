module.exports = function check(str, bracketsConfig) {
  // your solution
  let realStr = "" + bracketsConfig
  let bracketsArr = realStr.split(",")
  let bracketsStr = ""
  for (let i = 0; i < bracketsArr.length; i++) {
    bracketsStr += "" + bracketsArr[i]
  }
  if (str.replace(bracketsStr, "") == "") {
    str=str.replace(bracketsStr, "")
    if (str.length%2===0){
      return true
    }
  }
  
  else {
    return false
  }
}
