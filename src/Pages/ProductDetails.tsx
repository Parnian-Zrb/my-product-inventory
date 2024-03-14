import { useState, useEffect } from "react";
import { ProductType } from "../types/products";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const [product, setProduct] = useState<ProductType>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button> Update Product</button>
        <button> Delete Product</button>
      </div>
    );
  }
};

export default ProductDetails;
