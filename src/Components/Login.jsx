import React, { useState } from "react";
import { Row, Col, Card, Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });
    const [validated, setValidated] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }
        setValidated(true)
        event.preventDefault()
        const { email, password } = values;
        console.log(values);
        if (email === 'example@email.com' && password == '12345') {
            navigate('/admin')
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 login-page">
            <Container>
                <Row className="justify-content-lg-center">
                    <Col lg="4">
                        <Card body className="p-3">
                            <Card.Text>Login Here</Card.Text>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        id="inputEmail"
                                        className="rounded-0"
                                        onChange={(e) => setValues({ ...values, email: e.target.value })}
                                        required
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        id="inputPassword"
                                        className="rounded-0"
                                        onChange={(e) => setValues({ ...values, password: e.target.value })}
                                        required
                                    />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button variant="primary" type="submit" className="mt-3">
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;