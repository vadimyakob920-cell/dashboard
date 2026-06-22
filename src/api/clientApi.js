import axios from "axios";

const API = "https://sense-backend-0589.onrender.com";

export const fetchClients = async () => {
  const res = await axios.get(`${API}/clients`);
  return res.data;
};

export const fetchImage = (ip) => {
  return `${API}/image/${ip}`;
};

export const checkStatus = async (ip) => {
  const res = await axios.get(`${API}/check-status`, {
    params: { ip },
  });
  return res.data;
};