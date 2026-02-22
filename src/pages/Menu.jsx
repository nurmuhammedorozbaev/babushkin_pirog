import ProductCard from "../components/ProductCard";

function Menu() {
  return (
    <div>
      <h1>Меню</h1>
      <ProductCard title="Шоколадный торт" price="1200" />
      <ProductCard title="Яблочный пирог" price="800" />
      <ProductCard title="Медовик" price="1000" />
    </div>
  );
}

export default Menu;