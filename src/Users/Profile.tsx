import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            maxWidth: "400px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            <Link
              to="/Kanbas/Account/Admin/Users"
              className="btn btn-warning w-100"
            >
              Users
            </Link>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ width: "100px", textAlign: "right" }}>
              Username:
            </label>
            <input
              id="username"
              value={profile.username}
              onChange={(e) =>
                setProfile({ ...profile, username: e.target.value })
              }
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label style={{ width: "100px", textAlign: "right" }}>
              Password:
            </label>
            <input
              value={profile.password}
              onChange={(e) =>
                setProfile({ ...profile, password: e.target.value })
              }
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label
              htmlFor="firstName"
              style={{ width: "120px", textAlign: "right" }}
            >
              First Name:
            </label>
            <input
              value={profile.firstName}
              onChange={(e) =>
                setProfile({ ...profile, firstName: e.target.value })
              }
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label
              htmlFor="lastName"
              style={{ width: "120px", textAlign: "right" }}
            >
              Last Name:
            </label>
            <input
              value={profile.lastName}
              onChange={(e) =>
                setProfile({ ...profile, lastName: e.target.value })
              }
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label htmlFor="dob" style={{ width: "120px", textAlign: "right" }}>
              Date of Birth:
            </label>
            <input
              type="date"
              value={profile.dob}
              onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label
              htmlFor="email"
              style={{ width: "120px", textAlign: "right" }}
            >
              Email:
            </label>
            <input
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              style={{ flex: "1" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <label
              htmlFor="role"
              style={{ width: "120px", textAlign: "right" }}
            >
              Role:
            </label>
            <select
              onChange={(e) => setProfile({ ...profile, role: e.target.value })}
              value={profile.role}
              style={{ flex: "1" }}
            >
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button className="btn btn-primary" onClick={save}>
              Save
            </button>
            <button className="btn btn-danger" onClick={signout}>
              Signout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
