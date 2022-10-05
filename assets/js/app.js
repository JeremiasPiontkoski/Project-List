document.querySelector("#formRegister").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    /* const ids = [1,2,3,4,5,6,7,8]; */


    /* console.log(User.verifyEmail(email)); */

    let newUser = new User(name, email, password);
    newUser.verifyListUsers(newUser);

    

    /* localStorage.removeItem("users") */
});