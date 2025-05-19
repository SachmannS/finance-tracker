// import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Transaction from "../components/root/Transactions";

export default function Transactions() {
  return (
    <Box p={6} maxW="900px" mx="auto">
      <Heading mb={6} color='black'>Transactions</Heading>
      <Transaction/>
    </Box>
  );
}
