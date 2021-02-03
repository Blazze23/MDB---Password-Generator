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
  let numOfCharacters = $("#numberOfCharacters").val();
  console.log(numOfCharacters);
  while (password.length < numOfCharacters) {
    let rand = Math.round(Math.random() * text.length);
    console.log(rand);
    password += text[rand];
  }
  console.log(password);
  $("#password").text(password);
}
