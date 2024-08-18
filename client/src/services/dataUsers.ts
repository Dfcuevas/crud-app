import axios from "axios";
import { UserData } from "../interfaceUsers";

const baseUrl = "http://localhost:3000/api";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/`);
    const users = response.data;
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (dataNewUser: UserData) => {
  try {
    const response = await axios.post(`${baseUrl}/create`, dataNewUser);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete/${userId}`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (dataUpdatedUser: any) => {
  const { name, username, email, city, phone, _id } = dataUpdatedUser;
  try {
    const response = await axios.put(`${baseUrl}/update/${_id}`, {
      name,
      username,
      email,
      city,
      phone,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
