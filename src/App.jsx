import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Nav from "pages/LandingPage/Nav";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Nav/>
        <Routes />
      </Router>
    </ChakraProvider>
  );
}

export default App;
