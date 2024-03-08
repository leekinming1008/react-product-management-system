import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TabPanels, Tabs } from "@chakra-ui/tabs";

const Layout = () => {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <Navbar />
        <TabPanels>
          <Outlet />
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Layout;
