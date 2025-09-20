import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getContact = async (formData) => {
  try {
    const res = await api.post("/api/contacts", formData);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default api;
