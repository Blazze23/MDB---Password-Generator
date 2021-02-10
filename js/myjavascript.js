function generatePassword() {
  let password = "";
  let text = "qwertyuiopasdfghjklzxcvbnm";
  let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let symbols = "!@#$%^&*()_+{}[]:;></?|";
  let numbers = "0123456789";
  if ($("#uppercase").prop("checked")) {
    text+=uppercase;
  }
  if ($("#symbols").prop("checked")) {
    text+=symbols;
  }
  if ($("#numbers").prop("checked")) {
    text+=numbers;
  }
  console.log(text);
  let i = 0;
  let numOfCharacters = $("#numberOfCharacters").val();
  console.log(numOfCharacters);
  while (i < numOfCharacters) {
    let rand = Math.round(Math.random() * 100);
    console.log(rand);
    if (rand <= text.length - 1) {
      password += text[rand];
      i++;
    }
  }
  console.log(password);
  $("#password").text(password);
}
