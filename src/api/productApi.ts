//CRUD OPERATION
//GET/POST/PATCH,PUT/DELETE

import axios from "axios";
const URL= "https://fakestoreapi.com/products"

//fetch all the  products 
export const getAlldata =() => 
axios.get(URL);

interface ProductType{
    title: string;
    price: string;
      description: string,
      category: string,
      rating: string,


}

//create a new product
export const createProduct = (productData: ProductType) =>
  axios.post(URL, productData);


//get a single product
export  const getProductById = (id :string)=>
   axios.get(`${URL}, ${id}`);


//update  an existing product
export const updateProduct =  ( id: string, productData : ProductType) =>
axios.patch(`${URL}/${id}`, productData );

//delete  a product 
export const deleteProduct = (id: string )=>
     axios.delete (`${URL}/${id}`);
