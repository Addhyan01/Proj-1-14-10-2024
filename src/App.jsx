
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Dashboard from "./page/Dashboard/Dashboard"
import FulltimeJobs from "./page/Fulltimejob/FulltimeJobs"
import Internship from "./page/Internship/Internship"
import OtherJobs from "./page/OtherJob/OtherJobs"
import Applied from "./page/Applied/Applied"
import Message from "./page/Message/Message"
import Login from "./page/Login/Login"
import Register from "./page/Register/Register"
import Nav from "./components/Nav1/Nav"
import NavB from "./components/Nav2/NavB"

import "./App.css"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className="app-container">
        <NavB />
        <div className="main-content">
          <Nav/>
          <div className="page-content">
            <Routes>  
              <Route path="/" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/fulltimejobs" element={<FulltimeJobs />} />
              <Route path="internship" element={<Internship />} />
              <Route path="/otherjobs" element={<OtherJobs />} />
              <Route path="/appled" element={<Applied />} />
              <Route path="/message" element={<Message />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>







     
    </>
  )
}

export default App
