import axios from "axios";
const URL_ROOT_API = `${process.env.URL_API}/api/users`;

const signup = async (user) => {
  try {
    const resp = await axios.post(`${URL_ROOT_API}/signup`, user);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (user) => {
  try {
    const resp = await axios.post(`${URL_ROOT_API}/login`, user);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export { signup, login };
