import React, { createContext, useState } from 'react';
import Home from './Components/HomePage/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Classes from './Components/Classes/Classes';
import Service from './Components/Service/Service';
import PricingPlan from './Components/PricingPlan/PricingPlan';
import PurchaseForm from './Components/PurchaseForm/PurchaseForm';
export const userContext = createContext();
function App() {
  const [service, setService] = useState({});
  console.log(service);
  return (
    <userContext.Provider value={[service, setService]}>
      <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/service' element={<Service />} />
            <Route path='/price' element={<PricingPlan />} />
            <Route path='/purchase' element={<PurchaseForm />} />
          </Routes>
      </Router>
    </userContext.Provider>
  );
}

export default App;
