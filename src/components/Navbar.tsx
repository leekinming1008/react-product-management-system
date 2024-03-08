import { Link } from "react-router-dom";
import { Tab, TabList } from "@chakra-ui/tabs";

const Navbar = () => {
  return (
    <>
      <TabList>
        <Tab>
          <Link to={"/"}>Home Page</Link>
        </Tab>
        <Tab>
          <Link to={"/addProduct"}>Add Product</Link>
        </Tab>
        <Tab>
          <Link to={"/favorites"}>Favorites</Link>
        </Tab>
      </TabList>
    </>
  );
};

export default Navbar;
