//CRUD OPERATION
//GET/POST/PATCH,PUT/DELETE
const productAPI = import.meta.env.VITE_BASE_URL;
import axios from "axios";
 
export const getAlldata =() => 
axios.get(productAPI);

//create a new product

interface dataType{
    
    title:string;
    description: string;
    price:string;
    category: string,
    rating: string,

    
}
export const createData= (data: dataType) => {
    axios.post(productAPI, data) 

}