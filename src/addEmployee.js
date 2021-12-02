import React from 'react';
import employeeRouteFunctions from './employeeRouteFunctions';
import { useNavigate, Redirect } from 'react-router-dom'
import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';


const defaultState = {
    _id: 1,
    firstName: '',
    lastName: '',
    emailId: ''
}

const AddEmployee = () => {
    const [state, setState] = useState(defaultState);
    const { _id, firstName, lastName, emailId } = state;
    const navigate = useNavigate();

    const addEmployee = async (data) => {
        const res = await employeeRouteFunctions.createNewEmployee(data);
        if (res.data === 'Employee added!') {
            alert("Add Success");
        }
    }

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !emailId || !lastName || !_id) {
            alert("Information cannot be blank")
        }
        else {
            addEmployee(state);
            navigate('/')
        }
    }

    return (
        <div>
            <h2 className="text-center">Add New Employee</h2>
            <br />
            <div className="text-center">
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="_id">
                            ID:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="number"  placeholder="1"  name="_id" value={_id} onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="firstName">
                            First Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="First Name" name="firstName" value={firstName} onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="lastName">
                            Last Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text"  placeholder="Last Name" name="lastName" value={lastName} onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="emailId">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email"  placeholder="email@example.com" name="emailId" value={emailId} onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>
                    <button style={{margin:"10px"}} className="btn btn-primary" onClick={handleSubmit}>Save</button>
                </Form>
                <a href={`/`}><button className="btn btn-primary">Cancel</button></a>
            </div>
        </div>
    );
}


export default AddEmployee;