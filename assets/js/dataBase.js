class dataBase {

    static getUsers() {
        let data = JSON.parse(localStorage.getItem("users"));
        return data;
    }

    static setUsers(users) {
        console.log(users)
        let newUsers = localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    static verifyName(name) {
        let e_name = name.length > 0;
        return e_name;
    }

    static verifyEmail(email) {
        let e_email = email.length > 0;
        return e_email;
    }

    static verifyPassword(password){
        let e_password = password.length > 0;
        return e_password;
    }    
}