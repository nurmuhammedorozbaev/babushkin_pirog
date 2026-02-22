import ProductCard from "../components/ProductCard";

function Menu() {
  const products = [
    { title: "Яблочный пирог", price: 350 },
    { title: "Шоколадный пирог", price: 400 },
    { title: "Сырник", price: 250 }
  ];

  return (
    <div>
      <h1>Меню</h1>
      {products.map((p, i) => <ProductCard key={i} {...p} />)}
    </div>
  );
}

export default Menu;