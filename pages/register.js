import Head from "next/head";
import Link from "next/link";
import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";
import valid from "../utils/valid";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const [values, setValues] = useState({ error: "", message: "" });
  const { error, message } = values;

  const showError = () =>
    error ? <div className="alert alert-danger">{message}</div> : "";

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // console.log(userData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) {
      console.log(errMsg);
      setValues({ ...values, error: true, message: errMsg });
    }
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
        {showError()}
        <div className="form-group mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChangeInput} />
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            // <input>
            type="email"
            name="email"
            onChange={handleChangeInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChangeInput}
          />
        </Form.Group>

        <Form.Group className="mb-3">
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
