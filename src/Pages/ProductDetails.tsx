import { useState, useEffect } from "react";
import { ProductType } from "../types/products";

import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";

const ProductDetails = () => {
  const { id = "" } = useParams();
  console.log("This is the id", id);
  const [product, setProduct] = useState<ProductType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const responseData = await getProductById(id);
        setProduct(responseData.data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button> Update Product</button>
          <button> Delete Product</button>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
};

export default ProductDetails;
