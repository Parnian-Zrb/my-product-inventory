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
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
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
    </>
  );
};
//     <div className="productContainer">
//       {productsArray.map((product) => (
//         <ProductCard
//           image={product.image}
//           name={product.name}
//           description={product.description}
//           price={product.price}
//           rating={4.5}
//         />
//       ))}
//     </div>
//   );
// };

export default Home;
