const btn = document.querySelector(".generatebutton");
const display = document.querySelector(".display");
const h2 = document.querySelector("h2");

const copyButton = document.querySelector("#copyButton");

//generate
function generatePassword(lengths) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  let password = "";

  for (let i = 0; i < lengths; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// //copyclipboard
// copyButton.addEventListener("click", function(){
//     password.select()
//     document.execCommand('copy');
//     alert('Password copied to clipboard!');
// })

copyButton.addEventListener("click", function () {
  const passwordInput = document.createElement("input");
  document.body.appendChild(passwordInput);
  passwordInput.value = h2.innerHTML;
  passwordInput.select();
  document.execCommand("copy");
  document.body.removeChild(passwordInput);
  alert(`" ${h2.innerHTML} " copied`);
});

btn.addEventListener("click", function () {
  const lengths = document.querySelector(".length").value;
  const password = generatePassword(parseInt(lengths));
  console.log(password);
  h2.innerHTML = password;
});
