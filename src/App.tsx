import { Routes, Route } from "react-router-dom";
import Dashboard from "../src/pages/dashboard";
import Transactions from "../src/pages/Transactions";
import Navbar from "../src/components/root/Navbar";
const App = () => {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
    </>
  )
  
};

export default App;
