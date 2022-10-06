    let users = [];
    let registredUsers = dataBase.getUsers();
  
class User {
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.id = this.verifyUsers();
    }
    
    verifyUsers() {
        if(dataBase.getUsers() == null) {
            return dataBase.getRandomInt();
        }else {
            return dataBase.generateId()
        }
    }

    verifyListUsers(newUser) {
        registredUsers == null ? this.addNewUser(newUser) : this.setUsers(newUser);
    }
    
    addNewUser(newUser) {
        users.push(newUser)
        this.registerNewUser();
        return true;
    }

    setUsers(newUser) {                
        registredUsers.forEach(e => {
            users.push(e);
        });

        this.addNewUser(newUser);
        return true;
    }

    registerNewUser() {
        dataBase.setUsers(users) ? this.cleanListUsers() : false;       
    }  

    static getPasswordByIndex(index, password) {
        this.verifyPasswordExists(registredUsers[index].password, password) != -1 ? true : false
    } 
     
    static verifyEmailExists(email) {
        if(registredUsers == null){
            return -1;
        }else {
          return registredUsers.findIndex(e => e.email == email)
        }
    }

    static getPasswordByIndex(i) {
        return registredUsers[i].password;
    }

    static verifyPasswordExists(inputPassword, passwordRegistred) {
        if(inputPassword == passwordRegistred) {
            return true;
        }else {
            return false;
        }
    }

    static verifyPasswordLength(password) {
        let e_password = password.length > 7;
        return e_password;
    }

    static loginUser(email, password) {
        let e_email = this.verifyEmailExists(email);
        e_email != -1 ? this.getPasswordByIndex(e_email, password) : false;
    }

    static getDataByEmail(email) {
        let user = registredUsers.findIndex(e => e.email = email);
        return registredUsers[user];
    }

    static setUserLogged(email){
        let data = this.getDataByEmail(email);
        dataBase.setUserLogged(data);
        return true;
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