import { useState, useEffect } from "react";
import { ProductType } from "../types/products";

import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProductById } from "../api/productApi";

const ProductDetails = () => {
  const { id = "" } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    try {
      setIsLoading(true);

      const response = await deleteProduct(id);
      console.log("handleDelete:", response);
      navigate("/");
    } catch (error) {
      console.error("Error deleting product:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {product ? (
        <>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button> Update Product</button>
          <button onClick={handleDelete}>
            {/* Delete Product */}
            {isLoading ? <p>Deleting...</p> : <p>Delete Product</p>}
          </button>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
};

export default ProductDetails;
