// import { useEffect } from 'react';
// import axios from 'axios';
// import { updateProduct } from '../api/productApi';

// interface ProductProps {
//  title: string;
//  price: string;
//  description: string;
//  category: string;
//  rating: string;
// }

const ProductDetails = () => {
  return (
    <div>
      <h1>{ProductDetails.title}</h1>
      <p>{ProductDetails.description}</p>
      <button> Update Product</button>
      <button> Delete Product</button>
    </div>
  );
};

export default ProductDetails;
