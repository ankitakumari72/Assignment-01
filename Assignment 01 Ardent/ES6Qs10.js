async function loginUser(email, password) {
  try {
    const response = await fetch(
      "https://example.com/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      }
    );

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();

    console.log("Login Successful:", data);
  } catch (error) {
    console.error("Login Failed:", error.message);
  }
}

loginUser("user@gmail.com", "123456");