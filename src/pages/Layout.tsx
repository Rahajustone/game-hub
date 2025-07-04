import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/Navbar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Box pt="80px">
        <Outlet />
      </Box>
    </>
  );
}

export default Layout;