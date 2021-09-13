import { Container, Form, Button } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
import valid from "../utils/valid";
// import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";
import { useRouter } from "next/router";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    cf_password: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

  const [values, setValues] = useState({ error: "", loading: "" });
  const { error, loading } = values;

  const showError = () =>
    error ? <div className="alert alert-danger">{error}</div> : "";
  const showLoading = () =>
    loading ? <div className="alert alert-info">Loading...</div> : "";
  // const showMessage = () =>
  //   message ? <div className="alert alert-info">{message}</div> : "";

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setValues({ ...values, error: "" });
    // console.log(userData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) {
      console.log(errMsg);
      setValues({ ...values, error: errMsg, loading: "1" });
    } else {
      const res = await postData("auth/register", userData);
      if (res.err) return console.log("error");
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
        {showLoading()}
        <div className="form-group mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChangeInput} />
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            // <input>
            type="text"
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
