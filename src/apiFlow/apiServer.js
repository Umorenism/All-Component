import axios from "axios";

const API_URL = "http://localhost:6001/api/auth";

const postRequest = async (endpoint, data) => {
  try {
    const response = await axios.post(`${API_URL}/${endpoint}`, data);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Something went wrong!";
  }
};

export const loginUser = async (credentials) => {
  return postRequest("login", credentials);
};

export const signupUser = async (userData) => {
  return postRequest("signup", userData);
};

export const requestOTP = async (email) => {
  return postRequest("request-otp", { email });
};

export const resetPassword = async (data) => {
  return postRequest("reset-password", data);
};
