import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddProduct">Add Product</Link>
        </li>
        <li>
          <Link to="/ProductDetails">Product Details</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
