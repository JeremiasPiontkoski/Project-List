    let users = [];
class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = this.getRandomInt(1, 1000);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    verifyListUsers(newUser) {
        dataBase.getUsers() == null ? this.addNewUser(newUser) : this.setUsers(newUser);
    }

    setUsers(newUser) {
        let dataUsers = dataBase.getUsers();
        
        dataUsers.forEach(e => {
            users.push(e);
        });

        this.addNewUser(newUser);
        return true;
    }

    addNewUser(newUser) {
        users.push(newUser)
        this.registerNewUser();
        return true;
    }

    registerNewUser() {
        dataBase.setUsers(users) ? this.cleanListUsers() : false;       
    }

    cleanListUsers() {
        console.log(users)
        users.length = 0;
    }
}