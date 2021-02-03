import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Edit = () => {
  const [edit, setEdit] = useState({
    title: "",
    description: ""
  })
  
  const updateHandler = e => {
    e.preventDefault();
    axios
      .put(`https://build-week-how-to-tt102.herokuapp.com/api/users/:userId/howtos/${id}`, )
      .then(res => {console.log(res)
        
      })
      .catch(err => console.log(err))
  }

  return (
    <form onSubmit={updateHandler}
      <div>
        <label>Title:</label>
        <input 
          type="text"
          name=""
        />
      </div>
    </form>
    );
  }
}

export default Edit;