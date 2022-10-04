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
}