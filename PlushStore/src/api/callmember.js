import axios from "./axios";

export const getMembers = async () => {
  const res = await axios.get("/member");
  return res.data;
};

export const getMemberById = async (id) => {
  const res = await axios.get(`/member/${id}`);
  return res.data;
};

export const insertMember = async (memberData) => {
  // memberData = { name, pass, email }
  const res = await axios.post("/member", memberData);
  return res.data;
};

export const updateMember = async (id, memberData) => {
  // memberData = { name, pass, email }
  const res = await axios.put(`/member/${id}`, memberData);
  return res.data;
};

export const deleteMember = async (id) => {
  const res = await axios.delete(`/member/${id}`);
  return res.data;
};
