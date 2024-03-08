import { Link } from "react-router-dom";
import { Tab, TabList } from "@chakra-ui/tabs";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* top right bottom left */
  padding: 10px 20px;
  background-color: #282c34;
  color: white;
`;

const SelectionSection = styled.div`
  position: absolute;
  left: 50%;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Angus Inventory</h1>
      <SelectionSection>
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
      </SelectionSection>
    </NavbarContainer>
  );
};

export default Navbar;
