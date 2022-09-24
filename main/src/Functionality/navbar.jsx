import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex } from "rebass";
const NavBar = () => {
  return (
    // <nav className="navbar bg-light">
    //   <div className="container-fluid">
    //     <Link className="navbar-brand" to={"/"}>
    //       Employees
    //     </Link>
    //   </div>
    // </nav>
    <Flex fontSize={4} px={3} color="orange" bg="black" alignItems="center">
      <Link to={"/"}>
        <Text p={3} fontWeight="bold" color="orange">
          Employees
        </Text>
      </Link>
    </Flex>
  );
};

export default NavBar;
