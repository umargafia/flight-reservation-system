import "./user/HomeCompanents/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flight from "./user/FlightCompanents/Flight";
import Home from "./user/HomeCompanents/HomePage";
import BookFlight from "./user/BookFlightCompanents/BookFlight";
import About from "./user/AboutCompanents/About";
import Payment from "./user/PaymentCompanents/Payment";
import SucccesfulPayment from "./user/PaymentCompanents/SucccesfulPayment";
import AdminHome from "./Admin/AdminHome";
import ViewOrders from "./Admin/ViewOrders";
import { AdminCartId } from "./Contexts";
import { useState } from "react";

export const MyPort = 4000;
function App() {
  const [value, setValue] = useState(null);
  return (
    <AdminCartId.Provider value={{ value, setValue }}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/bookFlight" element={<BookFlight />} />
          <Route path="/AboutUS" element={<About />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/sucess" element={<SucccesfulPayment />} />
          <Route path="/Admin" element={<AdminHome />} />
          <Route path="/vieworder" element={<ViewOrders />} />
        </Routes>
      </Router>{" "}
    </AdminCartId.Provider>
  );
}

export default App;

//rafce
