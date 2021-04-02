import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=500";


// eslint-disable-next-line 
export default {
  searchEmployee: function() {
    return axios.get(BASEURL);
  }
};
