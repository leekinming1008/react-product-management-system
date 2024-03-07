import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home Page</Link>
        </li>
        <li>
          <Link to={"/addProduct"}>Add Product</Link>
        </li>
        <li>
          <Link to={"/favorites"}>Favorites</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
