const form = document.querySelector(".form_class");
const input = document.getElementById("pass");
const p = document.querySelector(".result");
// console.log(p);

form.addEventListener("submit", (bosildi) => {
  bosildi.preventDefault();
  const parol = input.value;

  const natija = validator.isStrongPassword(parol);
  console.log(parol, natija);
  input.value = "";
  input.focus();

  if (natija) {
    p.textContent += "this is true password";
    p.style.color = "green";

    // console.log("natija true");
  } else {
    p.textContent += "this is false password";
    p.style.color = "red";
    p.style.fontSize = "30px";

    // console.log("natija false");
  }
});
