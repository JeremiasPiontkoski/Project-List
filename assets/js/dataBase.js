let numMinId = 1;
let numMaxId = 1000;

class dataBase {
    static getUsers() {
        let data = JSON.parse(localStorage.getItem("users"));
        return data;
    }

    static getUserLogged() {
        return JSON.parse(localStorage.getItem("userLogged"));
    }

    static setUsers(users) {
        console.log(users)
        let newUsers = localStorage.setItem("users", JSON.stringify(users));
        return true;
    }

    static setUserLogged(user) {
        localStorage.setItem("userLogged", JSON.stringify(user))
        return true;
    }

    static getRandomInt() {
        let min = Math.ceil(numMinId);
        let max = Math.floor(numMaxId);
        let id = Math.floor(Math.random() * (max - min) + min);
        return id;
    }

    static generateId() {
        let e_id;
        let newId;
        do {
            newId = this.getRandomInt();
            e_id = registredUsers.findIndex(e => e.id == newId);
        } while (e_id != -1);
        return newId;
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