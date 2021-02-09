import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import * as yup from "yup";
import styled from "styled-components";
import { Container, Form, ButtonToggle } from "reactstrap";

import "./Homepage.css";
import axiosWithAuth from "../../Auth/axiosWithAuth";

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

const Howto = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const submitHistory = useHistory()

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

  const onSubmit = async (e) => {
    e.preventDefault();
    formSchema.isValid(newPost).then((valid) => {
      if (!valid) return;
    });
    
    axiosWithAuth()
      .put(`/users/${props.ID}/howtos/${props.howtoID}`, newPost)
      .then(res => {console.log(res)})
      .catch(err => console.log(err))

    setIsEditing(false)
  };


  const DeleteHandler = () => {
    axiosWithAuth()
      .delete(`https://build-week-how-to-tt102.herokuapp.com/api/users/${props.ID}/howtos/${props.howtoID}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      submitHistory.push(`/Homepage`)
  }

  return (
    <div>
      {isEditing ? (
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
      ) : (
        <div className="PostContainer">
          <div className="PostContainerGrey">
            <div className="PostTitle">
              <h2>{props.title}</h2>
            </div>
            <div className="PostContainerWhite">
              <p className="Steps">{props.description}</p>
            </div>
            <div className="EditDeleteButtons">
              <button className="EditButton" onClick={() => setIsEditing(true)}>
                Edit
              </button>
              <button className="DeleteButton" onClick={DeleteHandler}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Howto;