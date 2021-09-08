import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Container, Form, Button } from "react-bootstrap";
const Signin = () => {
  return (
    <Container>
      <Head>
        <title>Sign in Page</title>
      </Head>
      <Form className="mx-auto mt-5" style={{ maxWidth: "500px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button variant="primary btn-dark" type="submit">
          Login
        </Button>

        <p className="my-2">
          You don't have an accout?
          <Link href="/register">
            <a className="mx-2" style={{ color: "crimson" }}>
              Register
            </a>
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default Signin;
