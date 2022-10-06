document.querySelector("#btnLogin").addEventListener("click", (e) => {
    e.preventDefault();
    
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    let indexByEmail = User.verifyEmailExists(email);
    let passwordRegistred;

    if(indexByEmail != -1) {
        passwordRegistred = User.getPasswordByIndex(indexByEmail);

    }
    
    if(indexByEmail == -1) {
        console.log("Email ou Senha inválidos!");
    }else if(!User.verifyPasswordExists(password, passwordRegistred)) {
        console.log("Email ou Senha inválidos");
    }else {
        /* User.setUserLogged(email) */
        let newUser = new User();
        newUser.setUserLogged(email)
        console.log("Usuário logado!");
    }

    /* console.log(User.getDataByEmail(email)) */
    
    /* localStorage.removeItem("users") */
})