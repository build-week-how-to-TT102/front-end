import React from 'react';
import './Homepage.css'

const Homepage = () => {
  return (
    <div>
      <nav>
          <h2 className="LifeHacksText">Life Hacks</h2>
          <h5 className="SearchText">Search: <input placeholder="Search your LifeHacks"/></h5>
          <button className="Logout">Log Out</button>
      </nav>
        <div className="CreatePostDiv">
          <button className="CreatePost">Create Post</button>
        </div>
        <div className="PostContainer">
          <div className="PostContainerGrey">
            <div className="PostTitle">
              <h2>Outer Layer Orange as Candle</h2>
            </div>
            <div className="PostContainerWhite">
              <p className="Steps">Step 1</p>
            </div>
            <div className="EditDeleteButtons">
              <button className="EditButton">Edit</button>
              <button className="DeleteButton">Delete</button>
            </div>
          </div>
        </div>
    </div>
  )    
}

export default Homepage;