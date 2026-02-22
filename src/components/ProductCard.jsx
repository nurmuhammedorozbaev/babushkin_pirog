function ProductCard({ title, price }) {
  return (
    <div style={{ background:"white", padding:"20px", borderRadius:"15px", boxShadow:"0 5px 15px rgba(0,0,0,0.1)", width:"200px" }}>
      <h3>{title}</h3>
      <p>{price} сом</p>
      <button>Заказать</button>
    </div>
  );
}

export default ProductCard;