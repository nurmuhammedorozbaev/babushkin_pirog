function Modal({ isOpen, onClose, title }) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        textAlign: "center",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)"
      }}>
        <h2>Спасибо за заказ 💖</h2>
        <p style={{ fontSize: "18px" }}>{title}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;