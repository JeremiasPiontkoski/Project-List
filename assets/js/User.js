    let users = [];
    let numMinId = 1;
    let numMaxId = 1000;
class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = this.verifyUsers();
    }
    
    verifyUsers() {
        if(dataBase.getUsers() == null) {
            return this.getRandomInt();
        }else {
            return this.generateId();
        }
    }

    getRandomInt() {
        let min = Math.ceil(numMinId);
        let max = Math.floor(numMaxId);
        let id = Math.floor(Math.random() * (max - min) + min);
        return id;
    }

    generateId() {
        let e_id;
        let newId;
        do {
            newId = this.getRandomInt();
            e_id = dataBase.getUsers().findIndex(e => e.id == newId);
        } while (e_id != -1);
        return newId;
    }

    verifyListUsers(newUser) {
        dataBase.getUsers() == null ? this.addNewUser(newUser) : this.checkUserData(newUser);
    }
    
    addNewUser(newUser) {
        users.push(newUser)
        this.registerNewUser();
        return true;
    }

    setUsers(newUser) {
        let dataUsers = dataBase.getUsers();
        
        dataUsers.forEach(e => {
            users.push(e);
        });

        this.addNewUser(newUser);
        return true;
    }

    registerNewUser() {
        dataBase.setUsers(users) ? this.cleanListUsers() : false;       
    }

    verifyEmail(newUser) {
        let e_email = dataBase.getUsers().findIndex(e => e.email == newUser.email);
        return e_email;
    }

    verifyPassword(newUser) {
        let e_password = newUser.password.length > 7;
        return e_password;
    }

    checkUserData(newUser) {
        if(this.verifyEmail(newUser) != -1){
            console.log("Email já cadastrado!");
        }else if(!this.verifyPassword(newUser)) {
            console.log("A senha deve conter no mínimo 8 caracteres!");
        }else {
            this.setUsers(newUser);
        }
    }

    /*
     MANTER ATÉ A PÁGINA DE LOGIN
     RETIRAR DEPOIS E REFORMULAR O CÓDIGO
    */
    cleanListUsers() {
        console.log(users)
        users.length = 0;
    }
}