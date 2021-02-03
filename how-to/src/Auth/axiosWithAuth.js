import axios from "axios";

export default function axiosWithAuth () {
  return axios.create({      
    baseURL: "https://build-week-how-to-tt102.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};