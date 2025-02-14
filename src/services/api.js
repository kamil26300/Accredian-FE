import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const submitReferral = async (referralData) => {
  try {
    const response = await api.post("/referrals", referralData);
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
