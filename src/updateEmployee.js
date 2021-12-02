import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import employeeRouteFunctions from './employeeRouteFunctions';
import { Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


let defaultState = {
    firstName: '',
    lastName: '',
    emailId: ''
}

const UpdateEmployee = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [state, setState] = useState(defaultState);
    let {firstName, lastName, emailId } = state;
    const navigate = useNavigate();

    useEffect(() => {
        getEmployee()
    }, []);

    const getEmployee = async () => {
        const res = await employeeRouteFunctions.getEmployeeById(id);
        if (res.status === 200) {
            setData(res.data);
        }
    };
    const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const update = (e) => {
        employeeRouteFunctions.updateEmployee(state, id).then(res => {
            if (!firstName || !emailId || !lastName) {
                alert("Information cannot be blank")
            }
            else {
                navigate('/')
            }

        });
    }

    return (
        <div>
            <h2 className="text-center">Update Employee</h2>
            <br />
            <div className="text-center">
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="_id">
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="hidden" name="_id" value={data.id} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="firstName">
                            First Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={data.firstName} name="firstName"  onChange={handleInputChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="lastName">
                            Last Name:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder={data.lastName} name="lastName" onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2" htmlFor="emailId">
                            Email:
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder={data.emailId} name="emailId" onChange={handleInputChange} required />
                        </Col>
                    </Form.Group>
                    <button className="btn btn-primary" onClick={update}>Update</button>
                </Form>
                <a href={`/`}><button className="btn btn-primary">Cancel</button></a>
            </div>
        </div>
    );
};
export default UpdateEmployee;