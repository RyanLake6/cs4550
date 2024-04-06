import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      let errorMessage = "An unexpected error occurred. Please try again.";

      setError(errorMessage);
    }
  };
  return (
    <div>
      {error && <div>{error}</div>}
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button onClick={signin}> Signin </button>
      <button onClick={signup}> Signup</button>
    </div>
  );
}
