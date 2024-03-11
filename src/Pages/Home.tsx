import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

const Home = () => {
  const productsArray = products.products.data.items;
  return (
    <div>
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
