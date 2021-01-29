import React from 'react'

const Homepage = () => {
    return (
        <div>
          <nav>
            <h2>Life Hacks</h2>
            <label className="SearchBar">Search: </label>
            <input placeholder="Search Life Hacks!"/>
            <button>Logout</button>
          </nav>
          <button className="CreatePost">Create Post</button>
        </div>
    )
}

export default Homepage