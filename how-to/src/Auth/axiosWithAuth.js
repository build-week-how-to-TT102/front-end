import axios from "axios";

export default function axiosWithAuth () {
  return axios.create({      
    baseURL: "",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};