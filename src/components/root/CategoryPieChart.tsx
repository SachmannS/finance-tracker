import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Box, Heading } from "@chakra-ui/react";

const data = [
  { name: "Rent", value: 4000 },
  { name: "Food", value: 3000 },
  { name: "Transport", value: 2000 },
  { name: "Subscriptions", value: 1000 },
];

const COLORS = ["#4299E1", "#48BB78", "#F6AD55", "#ED64A6"];

const CategoryPieChart = () => (
  <Box p={4} bg="white" borderRadius="xl" boxShadow="md" mt={8} color = {'Black'} mb={8}>
    <Heading fontSize="lg" mb={4}>
      Spending by Category
    </Heading>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </Box>
);

export default CategoryPieChart;
