document.querySelector("#btnRegister").addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    if(!(dataBase.verifyName(name) && dataBase.verifyEmail(email) && dataBase.verifyPassword(password))) {
        console.log("Preencha todos os Campos!");
    }else if(User.verifyEmailExists(email) != -1) {
        console.log("Email ja Cadastrado!");
    }else if(!User.verifyPasswordLength(password)) {
        console.log("A senha deve conter no mínimo 8 caracteres!");
    }else {
        let newUser = new User(name, email, password);
        newUser.verifyListUsers(newUser);
        window.open("index.html", "_self")
    }
    /* localStorage.removeItem("users") */
});