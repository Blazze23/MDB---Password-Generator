const CHARACTER_CLASSES = {
  lowers : "qwertyuiopasdfghjklzxcvbnm",
  uppers : "QWERTYUIOPASDFGHJKLZXCVBNM",
  symbols: "!@#$%^&*()_+{}[]:;></?|",
  digits : "0123456789",
}

function generatePassword(length = 8, useUppers = false, useSymbols = false, useDigits = false, useLowers = true) {
  let chars = ``;
  if(useLowers) {
    chars += CHARACTER_CLASSES.lowers;
  }
  if(useUppers) {
    chars += CHARACTER_CLASSES.uppers;
  }
  if(useSymbols) {
    chars += CHARACTER_CLASSES.symbols;
  }
  if(useDigits) {
    chars += CHARACTER_CLASSES.digits;
  }

  let password = ``;
  while(password.length < length) {
    // Randomly pick a character from the vocabulary and append it to the password
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}
