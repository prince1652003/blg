import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Image,
  Box,
  SimpleGrid,
  Container,
  Button,
} from "@chakra-ui/react";
import {
  Spacer,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="header">
      <Flex
        flexDirection={{ md: "row", base: "column" }}
        bg="white.A700"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        p={{ md: "24px", base: "20px" }}
        gap="40px"
        as="header"
      >
        <Flex
          mt={{ md: "2px", base: "0px" }}
          ml={{ md: "139px", base: "20px" }}
          w={{ md: "55%", base: "100%" }}
          flexDirection={{ md: "row", base: "column" }}
          justifyContent="space-between"
          alignItems="center"
          gap="40px"
        >
          <Text
            fontSize="2xl"
            fontFamily="Merriweather"
            fontWeight="bold"
            color="#6D4662"
          >
            Bloggy.dev
          </Text>
        </Flex>
      </Flex>
     
      <div className="navbar">
      <ul>
        <li>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </li>

        <li>
          <Link to="blogdetails" style={{ textDecoration: "none" }}>
          Blogdetails
          </Link>
        </li>
        
        <li>
          <Link to="bloggerdetails" style={{ textDecoration: "none" }}>
          bloggerdetails
          </Link>
        </li>

        <li>
          <Link to="contactus" style={{ textDecoration: "none" }}>
            Contact us
          </Link>
        </li>

      </ul>
    </div>
    </div>
  );
};

export default Nav;
