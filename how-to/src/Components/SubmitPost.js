import React, { useState, useEffect, useContext } from "react";
import * as yup from "yup";
import { Container, Form, ButtonToggle } from "reactstrap";
import { useHistory } from 'react-router-dom';
import MyContextProvider from "../ContextAPI/MyContextProvider"
import styled from "styled-components";
import axiosWithAuth from "../Auth/axiosWithAuth";

const CustomBox = styled.div`
  width: 400px;
  margin: 0px auto;
  border-radius: 10px;
  padding: 40px;
  border: 10px;
`;

const SubmitPrompt = styled.h2`
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

const TextStep = styled.textarea`
  width: 24.3rem;
  height: 30rem;
`;


const SubmitPost = (props) => {
  const {id} = useContext(MyContextProvider)
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
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
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
    validateChange(e);
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Please name your how-to"),
    description: yup.string().required("Please share how-to"),
  });

  useEffect(() => {
    formSchema.isValid(newPost).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [newPost, formSchema]);

  const submitHistory = useHistory()

  const onSubmit = async (e) => {
    e.preventDefault();
    formSchema.isValid(newPost).then((valid) => {
      if (!valid) return;
    });

    axiosWithAuth()
      .post(`/api/users/${id}`, newPost)
      .then(res => (res))
      .catch(err => (err))
    submitHistory.push("/Homepage")
  };

  return (
    <CustomBox>
      <Container>
        <div>
          <Form onSubmit={onSubmit}>
            <SubmitPrompt>Submit Post</SubmitPrompt>
            <label>
              Name Your How-To!
              <Inputs>
                <input
                  name="title"
                  id="title"
                  type="text"
                  onChange={onInputChange}
                />
              </Inputs>
            </label>
            <label>
              Share How-To!
              <Inputs>
                <TextStep
                  name="description"
                  id="description"
                  type="text"
                  onChange={onInputChange}
                />
              </Inputs>
            </label>
            <ButtonToggle
              disabled={isButtonDisabled}
              color="info"
              type="submit"
            >
              Post
            </ButtonToggle>
          </Form>
        </div>
      </Container>
    </CustomBox>
  );
};

export default SubmitPost;
