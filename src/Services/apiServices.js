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

// hero page services
export const getHeroPageInfoService = async () => {
  try {
    return await axiosInstance.get("hero/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// hero page services
export const getServicesPageInfoService = async () => {
  try {
    return await axiosInstance.get("services/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// hero contact services
export const getContactPageInfoService = async () => {
  try {
    return await axiosInstance.get("contact/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// hero about me services
export const getHiremePageInfoService = async () => {
  try {
    return await axiosInstance.get("hireme/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// skills page services
export const getSkillsPageInfoService = async () => {
  try {
    return await axiosInstance.get("skills/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// works page services
export const getWorksPageInfoService = async () => {
  try {
    return await axiosInstance.get("works/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// educations page services
export const getEducationsPageInfoService = async () => {
  try {
    return await axiosInstance.get("educations/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// footer page services
export const getFooterPageInfoService = async () => {
  try {
    return await axiosInstance.get("footer/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};

// menu page services
export const getMenuPageInfoService = async () => {
  try {
    return await axiosInstance.get("menus/all");
  } catch (err) {
    console.log(err.message);

    return err.message;
  }
};
