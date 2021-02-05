import React from "react"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: CoolComponent, ...rest}) => {
  return(
    <Route 
      {...rest}
        render={(CoolProps) => {
          if(localStorage.getItem("token")){
            return(<CoolComponent {...CoolProps}/>)
          } else {
            return(<Redirect to="/login"/>)
          }
        }}
    
    />
  )
}

export default PrivateRoute;