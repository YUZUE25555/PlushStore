import axios from "./axios";

// GET all plush
export const getPlush = async () => {
  try {
    const res = await axios.get("/plush");
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// GET plush by ID
export const getPlushById = async (id) => {
  try {
    const res = await axios.get(`/plush/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// INSERT plush
export const insertPlush = async (plushData) => {
  try {
    // plushData = { name_plush, price, img_url }
    const res = await axios.post("/plush", plushData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// UPDATE plush
export const updatePlush = async (id, plushData) => {
  try {
    // plushData = { name_plush, price, img_url }
    const res = await axios.put(`/plush/${id}`, plushData);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};

// DELETE plush
export const deletePlush = async (id) => {
  try {
    const res = await axios.delete(`/plush/${id}`);
    return res.data;
  } catch (err) {
    throw err.response?.data || err;
  }
};
