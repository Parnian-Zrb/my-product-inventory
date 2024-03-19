import { useState, useEffect } from "react";
import { ProductType } from "../types/products";
import "./ProductDetails.css";
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
        setProduct(responseData.data.data);
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
          <div>
            <img src={product.image} alt={product.title} />
          </div>
          <h1>{product.title}</h1>
          <p className="description1 ">{product.description}</p>
          <div className="B">
            <button> Update Product</button>
            <br />
            <button onClick={handleDelete}>
              {/* Delete Product */}
              {isLoading ? <p>Deleting...</p> : <p>Delete Product</p>}
            </button>
          </div>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </>
  );
};

export default ProductDetails;
