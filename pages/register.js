import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    console.log(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <Container>
      <Head>
        <title>Register Page</title>
      </Head>
      <Form
        className="mx-auto mt-5"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="form-group mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChangeInput} />
        </div>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleChangeInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="cf_password"
            onChange={handleChangeInput}
          />
          <Form.Text className="text-muted">
            We'll never share your information with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary btn-dark w-100" type="submit">
          Register
        </Button>

        <p className="my-2">
          You have an accout?
          <Link href="/signin">
            <a className="mx-2" style={{ color: "crimson" }}>
              Login Now
            </a>
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Register;
