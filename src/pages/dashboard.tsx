// "use client"
import CardRow from "../components/layout/CardLayout";
import ToggleBar from "../components/root/ToggleBar";
import { Container, useBreakpointValue, Stack, Box, HStack} from "@chakra-ui/react";
import { generateMockStats } from "../utils/mockStats";
import { useState,  useEffect} from "react";
import ExpenseIncomeChart from "../components/root/ExpenseIncomeChart";
import CategoryPieChart from "../components/root/CategoryPieChart";
import toast from 'react-hot-toast';


type ToggleOption = "weekly" | "monthly" | "yearly";

const Dashboard = () => {
  const [selected, setSelected] = useState<ToggleOption>("monthly");
  const stats = {
    weekly: generateMockStats(4),
    monthly: generateMockStats(4),
    yearly: generateMockStats(4),
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    toast.success('File saved successfully!');
  }, [])

  return (
    <>
      <HStack>
        {/* <ResponsiveSidebar/> */}
        <Container>
          
          <Stack px={4} pt={4}>
            {/* Cards Always First */}
            <CardRow stats={stats[selected]} />

            {/* Toggle comes below on mobile, above on desktop */}
            {isMobile ? (
              <Box mt={4} alignSelf="center">
                <ToggleBar selected={selected} onChange={setSelected} />
              </Box>
            ) : (
              <Box alignSelf="flex-end">
                <ToggleBar selected={selected} onChange={setSelected} />
              </Box>
            )}
          </Stack>
          <ExpenseIncomeChart />
          <CategoryPieChart />
        </Container>
      </HStack>
      {/* <Toaster/> */}
    </>
  )
};

export default Dashboard;
