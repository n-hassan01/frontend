import axios from "axios";

// Replace these with your actual API endpoint and credentials
const apiUrl = "http://localhost:8082/";
const username = "admin";
const password = "admin";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username,
    password,
  },
});

export const getDemoInfoService = async () => {
  try {
    return await axiosInstance.get("demo/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getHeroPageInfoService = async () => {
  try {
    return await axiosInstance.get("hero/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getServicesPageInfoService = async () => {
  try {
    return await axiosInstance.get("services/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getContactPageInfoService = async () => {
  try {
    return await axiosInstance.get("contact/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

export const getHiremePageInfoService = async () => {
  try {
    return await axiosInstance.get("hireme/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};
