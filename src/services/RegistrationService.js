import axios from "axios";
import bcrypt from "bcryptjs";

export const UserRegistration = (data) => {
  const password = data.password;
  const username = data.username;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  data["password"] = hash;

  return axios
    .put(`http://localhost:5000/user/updateUSER?username=${username}`, data)
    .then((res) => res.status);
};
