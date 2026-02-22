import { useState } from "react";
import Modal from "./Modal";

function ProductCard({ title, price }) {
  const [open, setOpen] = useState(false);

  const handleOrder = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ user: user.email, product: title, price });
    localStorage.setItem("orders", JSON.stringify(orders));

    setOpen(true);
  };

  return (
    <>
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        margin: "20px 0",
        transition: "0.3s"
      }}>
        <h3>{title}</h3>
        <p style={{ fontSize: "18px", fontWeight: "600" }}>
          {price} сом
        </p>
        <button onClick={handleOrder}>Заказать</button>
      </div>

      <Modal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title={`Вы заказали: ${title}`}
      />
    </>
  );
}

export default ProductCard;