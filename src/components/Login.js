import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAKE_USER = {
  username: "superadmin",
  password: "noditdashboard",
};

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === FAKE_USER.username &&
      password === FAKE_USER.password
    ) {
      localStorage.setItem("auth", "true");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h3 style={styles.title}>Admin Login</h3>
        <p style={styles.subtitle}>Sign in to access dashboard</p>

        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label text-light">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              style={styles.input}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              style={styles.input}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.footer}>
          Secure Admin Dashboard Access
        </p>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #1e293b, #0f172a)",
  },

  card: {
    width: "380px",
    padding: "30px",
    borderRadius: "16px",
    background: "#111827",
    border: "1px solid #1f2937",
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
  },

  title: {
    color: "white",
    textAlign: "center",
    marginBottom: "5px",
  },

  subtitle: {
    color: "#94a3b8",
    textAlign: "center",
    fontSize: "13px",
    marginBottom: "20px",
  },

  input: {
    background: "#0f172a",
    border: "1px solid #334155",
    color: "white",
  },

  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#3b82f6",
    color: "white",
    fontWeight: "600",
    marginTop: "10px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "12px",
    color: "#64748b",
  },
};