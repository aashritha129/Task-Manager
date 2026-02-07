async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);

    
      localStorage.setItem("user_id", data.user_id);

      
      window.location.href = "dashboard.html";
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Server not reachable");
  }
}
