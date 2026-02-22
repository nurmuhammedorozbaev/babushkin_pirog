function Modal({ isOpen, onClose, title }) {
  if (!isOpen) return null;
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right:0, bottom:0, background: "rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"white", padding:"20px", borderRadius:"10px", textAlign:"center", minWidth:"300px" }}>
        <h3>{title}</h3>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
}

export default Modal;