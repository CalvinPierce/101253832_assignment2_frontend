import './App.css';
import EmployeeList from './employeeList';
import AddEmployee from './addEmployee';
import ViewEmployee from './viewEmployee';
import UpdateEmployee from './updateEmployee';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element={<EmployeeList />}/>
        <Route exact path = "/employees" element={<EmployeeList />}/>
        <Route exact path = "/addEmployee" element={<AddEmployee />}/>
        <Route exact path = "/view/:id" element={<ViewEmployee />}/>
        <Route exact path = "/update/:id" element={<UpdateEmployee />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
