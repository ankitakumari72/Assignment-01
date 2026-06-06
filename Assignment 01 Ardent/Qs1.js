const storedUsername = "admin";
const storedPassword = "12345";

function login(username, password) {
    if (username !== storedUsername) {
        return "Invalid Username";
    } else if (password !== storedPassword) {
        return "Invalid Password";
    } else {
        return "Login Successful";
    }
}

console.log(login("admin", "12345"));