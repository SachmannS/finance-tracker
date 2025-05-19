import { Box, Flex } from "@chakra-ui/react";
import Cards from "../root/Cards";
import type { Stat } from "../../types/Stat";


export default function CardRow({ stats }: { stats: Stat[] }) {
  return (
    <Box mt={6} px={4}>
      <Flex
        direction={["column", "row"]}
        gap={4}
        justify="space-between"
        align="stretch"
        flexWrap="wrap"
      >
        {stats.map((stat, idx) => (
          <Cards
            key={idx}
            {...stat}
          />
        ))}
      </Flex>
    </Box>
  );
}
