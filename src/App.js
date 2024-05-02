
import './App.css';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import AdminDashboard from './Components/AdminDashboard';
import Edituser from './Components/Edituser';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NormalDashboard from './Components/NormalDashboard';
function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-light py-3 bg-primary">
        <div class="container-fluid">
          <span class="navbar-text">
            {/* Navbar text with an inline element */}
          </span>
        </div>
      </nav>

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/Edit" element={<Edituser></Edituser>} />
          <Route path="/NormalDashboard" element={<NormalDashboard></NormalDashboard>}></Route>

        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
