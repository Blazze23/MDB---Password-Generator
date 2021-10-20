const CHARACTER_CLASSES = {
  lowercase: "qwertyuiopasdfghjklzxcvbnm",
  uppercase: "QWERTYUIOPASDFGHJKLZXCVBNM",
  symbols  : "!@#$%^&*()_+{}[]:;></?|",
  digits   : "0123456789",
}

function generatePassword(numOfCharacters = 8, useUppers = false, useSymbols = false, useDigits = false) {

  let text = CHARACTER_CLASSES.lowercase;
  if(useUppers) {
    text += CHARACTER_CLASSES.uppercase;
  }
  if(useSymbols) {
    text += CHARACTER_CLASSES.symbols;
  }
  if(useDigits) {
    text += CHARACTER_CLASSES.digits;
  }

  let password        = "";
  let i               = 0;
  while(i < numOfCharacters) {
    let rand = Math.round(Math.random() * 100);
    if(rand <= text.length - 1) {
      password += text[rand];
      i++;
    }
  }
  return password;
}
