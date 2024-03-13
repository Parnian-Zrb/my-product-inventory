//CRUD OPERATION
//GET/POST/PATCH,PUT/DELETE

import axios from "axios";
const URL= "https://fakestoreapi.com/products"
export const getAlldata =() => 
axios.get(URL);

interface ProductType{
    title: string;
    price: string;
      description: string,
      category: string,
      rating: string,


}
export const createProduct = (productData: ProductType) =>
  axios.post(URL, productData);
