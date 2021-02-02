import React, { useState } from "react";
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

  const [postErrors, setPostErrors] = useState({
    title: "",
    content: "",
  });

  const [selectImage, setSelectImage] = useState(null);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // const formData = new FormData();
  // formData.append("title", title);
  // formData.append("file", selectImage);

  // axios
  //   .post(UPLOAD_URL, formData)
  //   .then((res) => {
  //     alert("File Upload Successful");
  //   })
  //   .catch((err) => alert("Upload not successful"));

  return (
    <CustomBox>
      <Container>
        <div>
          <Form>
            <SubmitPrompt>Submit Post</SubmitPrompt>
            <label>
              Title
              <Inputs>
                <input name="title" id="title" type="text" />
              </Inputs>
            </label>
            <label>
              Add Image
              <Inputs>
                <input
                  type="file"
                  value={selectImage}
                  onChange={(e) => setSelectImage(e.target.files[0])}
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
