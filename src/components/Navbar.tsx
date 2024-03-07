import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/AddProduct">Add</Link>
        </li>
        <li>
          <Link to="/ProductDetails">Edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
