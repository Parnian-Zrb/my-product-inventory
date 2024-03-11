import ProductCard from "../components/ProductCard";
import products from "../data/products.json";
import "./Home.css";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <div className="productContainer">
      {productsArray.map((product) => (
        <ProductCard
          name={product.name}
          description={product.description}
          price={product.price}
          rating={4.5}
          image={""}
        />
      ))}
    </div>
  );
};

export default Home;
