function registerUser(name, email, age) {
    const user = {
        name,
        email,
        age
    };

    console.log("Registration Successful");
    console.log(user);
}

registerUser("Rahul", "rahul@gmail.com", 22);