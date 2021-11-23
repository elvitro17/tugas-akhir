import React from "react";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("make login fetch call here", {
      email,
      password
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          email:
          <input
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          password:
          <input
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleSubmit}>submit</button>
      </div>
    </form>
  );
}
