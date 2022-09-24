import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Box, Text, Flex } from "rebass";
const NavBar = () => {
  return (
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
