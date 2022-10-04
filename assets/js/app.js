document.querySelector("#formRegister").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let newUser = new User(name, email, password);
    newUser.verifyListUsers(newUser);
    /* localStorage.removeItem("users") */
});