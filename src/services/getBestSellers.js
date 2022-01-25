import axios from "axios";

const URL_ROOT = `${process.env.REACT_APP_API}/api/bestsellerproducts`;

export const getBestSellers = async () => {
  const resp = await axios.get(`${URL_ROOT}/`);
  return resp.data;
};
