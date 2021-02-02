import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Container, Form, ButtonToggle } from "reactstrap";
import styled from "styled-components";
import axios from "axios";

const CustomBox = styled.div`
  width: 400px;
  margin: 0px auto;
  border-radius: 10px;
  padding: 40px;
  border: 10px;
`;

const RegisterPrompt = styled.h2`
  color: purple;
  width: 100%;
  margin-bottom: 20px;
  padding-right: 75px;
`;

const Inputs = styled.div`
  margin-bottom: 18px;
  input {
  width: 275px;
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateChange = (e) => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const formSchema = yup.object().shape({
    fname: yup.string().required("Frist name is required"),
    lname: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Not a valid email")
      .required("Email is required"),
    username: yup.string().required("Username is required"),
    password: yup.string().required("Please create a password"),
    confirmPassword: yup.string().required("Please confirm password"),
  });

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [formData, formSchema]);

  const onSubmit = async (e) => {
    e.preventDefault();
    formSchema.isValid(formData).then((valid) => {
      if (!valid) return;
    });
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confrimPassword: "Passwords do not match" });
      return;
    }
  };

  return (
    <CustomBox>
      <Container>
        <div>
          <Form onSubmit={onSubmit}>
            <RegisterPrompt>Register Now!</RegisterPrompt>
            <label htmlFor="fname">
              First Name
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="fname"
                  id="fname"
                  type="text"
                  value={formData.fname}
                  placeholder="First name"
                />
              </Inputs>
            </label>

            <label htmlFor="lname">
              Last Name
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="lname"
                  id="lname"
                  type="text"
                  value={formData.lname}
                  placeholder="Lirst name"
                />
              </Inputs>
            </label>
            <label htmlFor="email">
              Email
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="email"
                  id="email"
                  type="email"
                  value={formData.email}
                  placeholder="Email address"
                />
              </Inputs>
            </label>
            <label htmlFor="username">
              Create Username
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="username"
                  id="username"
                  type="text"
                  value={formData.username}
                  placeholder="Username"
                />
              </Inputs>
            </label>
            <label htmlFor="password">
              Create Password
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="password"
                  id="password"
                  type="password"
                  value={formData.password}
                  placeholder="Enter password"
                />
              </Inputs>
            </label>
            <label htmlFor="confirmPassword">
              Confirm Password
              <Inputs>
                <input
                  onChange={onInputChange}
                  name="confirmPassword"
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  placeholder="Re-enter password"
                />
              </Inputs>
            </label>
            <ButtonToggle
              disabled={isButtonDisabled}
              color="info"
              type="submit"
            >
              Submit
            </ButtonToggle>
          </Form>
        </div>
      </Container>
    </CustomBox>
  );
};

export default Register;
