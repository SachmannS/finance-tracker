import { useEffect, useState } from "react";
import { Box, Text, VStack, HStack, Badge } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";

type Transaction = {
  date: string;
  description: string;
  type: "Credit" | "Debit";
  category: string;
  amount: number;
};

const generateTransactions = (count = 20): Transaction[] =>
  Array.from({ length: count }, () => {
    const type = faker.helpers.arrayElement(["Credit", "Debit"] as const);
    return {
      date: faker.date.recent().toISOString().split("T")[0],
      description: faker.commerce.productName(),
      type,
      category: faker.commerce.department(),
      amount: faker.number.int({ min: 100, max: 5000 }),
    };
  });

export default function TransactionStrips() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    setTransactions(generateTransactions());
  }, []);

  return (
    <VStack p={4} maxW="600px" mx="auto">
      {transactions.map((tx, i) => (
        <HStack
          key={i}
          w="100%"
          p={4}
          borderRadius="md"
          bg={tx.type === "Credit" ? "green.50" : "red.50"}
          borderLeftWidth="6px"
          borderLeftColor={tx.type === "Credit" ? "green.400" : "red.400"}
          boxShadow="sm"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box flex="1">
            <Text fontWeight="bold" color = 'black' bg={tx.type === "Credit" ? "green.50" : "red.50"}>{tx.description}</Text>
            <Text fontSize="sm" color="black" bg={tx.type === "Credit" ? "green.50" : "red.50"}>
              {tx.category} &bull; {tx.date}
            </Text>
          </Box>
          <Badge
            colorScheme={tx.type === "Credit" ? "green" : "red"}
            fontWeight="bold"
            fontSize="md"
            px={3}
            py={1}
            borderRadius="full"
            bg={tx.type === "Credit" ? "green.50" : "red.50"}
            color = {'black'}
          >
            {tx.type}
          </Badge>
          <Text
            fontWeight="bold"
            color={tx.type === "Credit" ? "green.600" : "red.600"}
            minW="100px"
            textAlign="right"
            fontSize="lg"
            bg={tx.type === "Credit" ? "green.50" : "red.50"}
          >
            ₹{tx.amount.toLocaleString("en-IN")}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}
