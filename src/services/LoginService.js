import axios from "axios";

const LoginService = async (data) => {
  const response = await axios.post("http://localhost:5000/user/login", data);

  localStorage.setItem("x-auth-token", response.data.token);
  return response.status;
};

export default LoginService;
