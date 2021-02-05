/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../../Auth/axiosWithAuth";
import Howto from "./Howto";
import MyContextProvider from "../../ContextAPI/MyContextProvider";

import "./Homepage.css";

const Homepage = () => {
  const [howto, setHowto] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  // Context API
  const {id} = useContext(MyContextProvider)
  console.log({id})
  
  const submitHistory = useHistory();

  const logout = () => {
    localStorage.setItem("token", undefined);
    submitHistory.push("/");
  };

  const toCreatePost = () => {
    submitHistory.push("/SubmitPost");
  };

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/users/${id}`)
      .then((res) => {
        console.log(res);
        setHowto(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <nav>
        <h2 className="LifeHacksText">Life Hacks</h2>
        <h5 className="SearchText">
          Search:
          <input
            placeholder="Search your LifeHacks"
            onChange={(e) => {
              setSearchBar(e.target.value);
            }}
          />
        </h5>
        <button className="Logout" onClick={logout}>
          Log Out
        </button>
      </nav>
      <div className="CreatePostDiv">
        <button className="CreatePost" onClick={toCreatePost}>
          Create Post
        </button>
      </div>
      
      {howto
        .filter(function(titled) {
          if (searchBar === "") {
            return titled;
          } else if (titled.title.toLowerCase().includes(searchBar.toLowerCase())){
            return titled;
          }
        })
        .map((howto) => {
          return <Howto title={howto.title} description={howto.description} ID={id} key={howto.howtoID} howtoID={howto.howtoID}/>;
        })}
    </div>
  );
};

export default Homepage;