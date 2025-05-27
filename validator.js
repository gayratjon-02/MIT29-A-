const form = document.querySelector(".form_class");
const input = document.getElementById("pass");



form.addEventListener('submit', (bosildi) => {
    bosildi.preventDefault();
    const parol = input.value;

const natija = validator.isStrongPassword(parol);
console.log(natija);

    
});




