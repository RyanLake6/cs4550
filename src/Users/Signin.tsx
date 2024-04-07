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
    try {
      await client.signin(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      let errorMessage =
        "An error occured: Username or Password is incorrect. Please try again.";
      setError(errorMessage);
    }
  };
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/Account/Profile");
    } catch (err: any) {
      let errorMessage =
        "An error occurred: This Username already exists. Please try again.";
      setError(errorMessage);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        maxWidth: "300px",
      }}
    >
      {error && <div>{error}</div>}
      <h1>Signin</h1>
      <input
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <br />
      <input
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <button className="btn btn-primary" onClick={signin}>
          Signin
        </button>
        <button className="btn btn-warning" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}
