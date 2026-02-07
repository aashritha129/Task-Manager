async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("All fields are required");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const message = await res.text();

    if (res.ok) {
      alert(message);
      window.location.href = "login.html";
    } else {
      alert(message);
    }
  } catch (err) {
    alert("Server not reachable");
  }
}
