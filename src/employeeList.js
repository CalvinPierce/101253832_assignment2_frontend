import React, { Component, useEffect, useState } from 'react'
import employeeRouteFunctions from './employeeRouteFunctions'
import { Table, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'

const EmployeeList = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    const onDeleteEmployee = async (id) => {
        if (window.confirm("Confirm Delete")) {
            const res = await employeeRouteFunctions.deleteEmployeeById(id);
            if (res.status === 200) {
                alert("Delete Success");
                getAllEmployees();
            }
        }
    };

    const getAllEmployees = async () => {
        const res = await employeeRouteFunctions.getAllEmployees();
        if (res.status === 200) {
            setData(res.data);
        }
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="">Employee Management Assignment</Navbar.Brand>
                </Container>
            </Navbar>
            <h2 className="text-center">Employees List</h2>
            <a href={`/addEmployee`}>
                <button className="btn btn-primary">Add Employee</button>
            </a>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e, i) => {
                        return (
                            <tr key={i} style={{ height: 50 }}>
                                <td> {e.firstName} </td>
                                <td> {e.lastName}</td>
                                <td> {e.emailId}</td>
                                <td>
                                    <a href={`/update/${e._id}`}>
                                        <button className="btn btn-primary">Update</button>
                                    </a>
                                    <button onClick={() => onDeleteEmployee(e._id)} className="btn btn-danger">Delete </button>
                                    <a href={`/view/${e._id}`}>
                                        <button onClick={() => setData(data)} className="btn btn-primary">View </button>
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    );
}
export default EmployeeList;