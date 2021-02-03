import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import { Container, Form, ButtonToggle } from "reactstrap";
import styled from "styled-components";

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

const SubmitPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    content: "",
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
    content: yup.string().required("Please share how-to"),
  });

  useEffect(() => {
    formSchema.isValid(newPost).then((valid) => {
      console.log("valid?", valid);
      setIsButtonDisabled(!valid);
    });
  }, [newPost, formSchema]);

  const onSubmit = async (e) => {
    e.preventDefault();
    formSchema.isValid(newPost).then((valid) => {
      if (!valid) return;
    });
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
                <textarea
                  name="content"
                  id="content"
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
