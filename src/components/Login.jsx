import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    console.log(username);
    console.log(password);
    setPassword("");
    setUsername("");
  };
  const handleChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <div id="container">
      <div id="navbar">Login.js</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM.render(<Login />, document.getElementById("root"));
