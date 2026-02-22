import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isAuth, setIsAuth] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("isAuth") === "true";
    setIsAuth(auth);

    if (auth) {
      const user = JSON.parse(localStorage.getItem("user"));
      setEmail(user.email);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    window.location.href = "/";
  };

  return (
    <nav style={{
      background: "#6b1e1e",
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      color: "white"
    }}>
      <h2>Бабушкин пирог 🍰</h2>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/">Главная</Link>
        <Link to="/menu">Меню</Link>

        {isAuth ? (
          <>
            <span>Привет, {email} 👋</span>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;