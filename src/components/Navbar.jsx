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
    localStorage.removeItem("user");
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
        <Link to="/" style={{ color: "white" }}>Главная</Link>
        <Link to="/menu" style={{ color: "white" }}>Меню</Link>
        <Link to="/contacts" style={{ color: "white" }}>Контакты</Link>

        {isAuth ? (
          <>
            <span>Привет, {email} 👋</span>
            <button onClick={logout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login" style={{ color: "white" }}>Войти</Link>
            <Link to="/register" style={{ color: "white" }}>Регистрация</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;