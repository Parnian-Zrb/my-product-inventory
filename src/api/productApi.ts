//CRUD OPERATION
//GET/POST/PATCH,PUT/DELETE

import axios from "axios";
const PRODUCT_ENDPOINT = import.meta.env.VITE_BASE_URL;

export const getAlldata =() => 
axios.get(PRODUCT_ENDPOINT);
