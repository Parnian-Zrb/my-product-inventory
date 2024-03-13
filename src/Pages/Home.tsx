import ProductCard from "../components/ProductCard";
import { useState, useEffect } from "react";
import { getAlldata } from "../api/productApi";
import { ProductType } from "../types/products";
// import products from "../data/products.json";
import "./Home.css";

const Home = () => {
  //   const productsArray = products.products.data.items;

  const [products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAlldata();

        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="productContainer">
      {products.map((product) => (
        <ProductCard
          image={product.image}
          title={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default Home;
