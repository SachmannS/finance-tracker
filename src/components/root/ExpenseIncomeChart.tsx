import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Box, Heading } from "@chakra-ui/react";

const data = [
  { month: "Jan", income: 12000, expense: 10000 },
  { month: "Feb", income: 13500, expense: 11000 },
  { month: "Mar", income: 12800, expense: 13000 },  // expense > income
  { month: "Apr", income: 14500, expense: 12500 },
  { month: "May", income: 16000, expense: 17000 },  // expense > income
  { month: "Jun", income: 18000, expense: 14000 },
  { month: "Jul", income: 17000, expense: 17500 },  // expense > income
  { month: "Aug", income: 16500, expense: 16000 },
  { month: "Sep", income: 15000, expense: 14500 },
  { month: "Oct", income: 15800, expense: 16200 },  // expense > income
  { month: "Nov", income: 16800, expense: 15500 },
  { month: "Dec", income: 17500, expense: 16000 },
];

const ExpenseIncomeChart = () => (
  <Box p={4} bg="white" borderRadius="xl" boxShadow="md" mt={12} color = {'black'}>
    <Heading fontSize="lg" mb={4}>
      Income vs Expense
    </Heading>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="income" stroke="#3182CE" strokeWidth={3} />
        <Line type="monotone" dataKey="expense" stroke="#E53E3E" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);

export default ExpenseIncomeChart;
