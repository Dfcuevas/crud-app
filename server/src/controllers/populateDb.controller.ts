import axios from "axios";
import User from "../models/user.model.js";
import { UserData } from "../userInterface.js";

const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const fetchAndSaveUsers = async () => {
  try {
    const response = await axios.get<UserData[]>(apiUrl);
    const usersData = response.data;
    const users = usersData.map((user) => ({
      name: user.name,
      username: user.username,
      email: user.email,
      city: user.address.city,
      phone: user.phone,
    }));
    await User.insertMany(users, { ordered: false });
    console.log("Usuarios guardados en la base de datos");
  } catch (error: any) {
    if (error.code === 11000) {
      console.error("Error: Duplicado detectado", error.message);
    } else {
      console.log("Error al obtener y guardar usuarios:", error);
    }
  }
};
