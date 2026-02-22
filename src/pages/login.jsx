import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("isAuth", "true");
      localStorage.setItem("user", JSON.stringify(user));
      alert("Вы вошли в аккаунт ✅");
      window.location.href = "/";
    } else {
      alert("Неверный email или пароль ❌");
    }
  };

  return (
    <div>
      <h2>Вход</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Войти</button>
    </div>
  );
}

export default Login;