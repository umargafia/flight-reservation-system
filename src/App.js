import './HomeCompanents/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={ } />
        <Route path='/' element={ } />
        <Route path='/' element={ } /> */}
       
      </Routes>
    </Router>
  );
}

export default App;

//rafce