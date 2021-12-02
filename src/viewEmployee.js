import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import employeeRouteFunctions from './employeeRouteFunctions';
import { Table } from 'react-bootstrap';

const ViewEmployee = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getEmployee()
    }, []);

    const getEmployee = async () => {
        const res = await employeeRouteFunctions.getEmployeeById(id);
        if (res.status === 200) {
            setData(res.data);
        }
    };

    return (
        <div>
            <h2 className="text-center">View Employee</h2>
            <br />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> {data.firstName} </td>
                        <td> {data.lastName}</td>
                        <td> {data.emailId}</td>
                    </tr>
                </tbody>
            </Table>
            <a href={`/`}><button className="btn btn-primary">Home</button></a>
        </div>
    );
};
export default ViewEmployee;