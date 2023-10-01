import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateTeacher from "./component/Teacher/CreateTeacher";
import Table from "./component/Student/StudentTable";
import { Link } from "react-router-dom";
import AddStudent from "./component/Student/AddStudent";
import TeacherTable from "./component/Teacher/TeacherTable";
import Edit from "./component/Student/UpdateStud";
import UpdateTeacher from './component/Teacher/UpdateTeacher'


function App() {
  return (
    <>
      <div className="app-container">
        <div className="zen-header">
          <h2>
            <span className="material-symbols-outlined"></span>Zen Class
          </h2>
        </div>
        <div className="main">
          <div className="sidebar">
            <div className="zen-headind">
              <h5 className="text-center">
                <span className="material-symbols-outlined">
                  
                </span>
                Dashboard
              </h5>
            </div>
            <div className="side-menu">
              <nav className="zen-sidebar-nav" id="zen-sidebar-nav">
                <ul>
                  <li>
                    <Link to="/table"><b>Student</b></Link>
                  </li>

                  <li>
                    <Link to="/teacher"><b>Teacher</b></Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="content-area">
            {/* <img style={{backgroundColor:"white",width:'600px',}} src="https://pngimg.com/d/welcome_PNG32.png"/> */}
            <Routes>
              
              <Route path="table" element={<Table />}>
                <Route path="edit" element ={<Edit/>}/>
                <Route path="add" element={<AddStudent />} />
              </Route>
              <Route path="teacher" element={<TeacherTable />}>
               <Route path="update" element= {<UpdateTeacher/>}/>
                <Route path="mentor" element={<CreateTeacher />} />
              </Route>
            </Routes>
            {/* </Routes> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
