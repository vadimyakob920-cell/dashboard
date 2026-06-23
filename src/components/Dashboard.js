import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ClientTable from "./ClientTable";
import { useNavigate } from "react-router-dom";

const API = "https://sense-backend-0589.onrender.com";

export default function Dashboard() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const navigate = useNavigate();

  const load = async () => {
    const res = await axios.get(`${API}/clients`);
    setClients(res.data);
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 5000);
    return () => clearInterval(t);
  }, []);

  const filteredClients = clients.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.ip?.toLowerCase().includes(q) ||
      c.name?.toLowerCase().includes(q) ||
      c.email?.toLowerCase().includes(q)
    );
  });

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentClients = filteredClients.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <div style={styles.page}>

      {/* 🔥 TOP BAR (Logout moved here) */}
      <div style={styles.topBar}>
        <h4 style={{ margin: 0 }}>Dashboard</h4>

        <button className="btn btn-danger btn-sm" onClick={logout}>
          Logout
        </button>
      </div>

      <Header
        total={clients.length}
        active={clients.filter((c) => c.hadRun).length}
        blocked={clients.filter((c) => c.blocked).length}
        search={search}
        setSearch={setSearch}
      />

      {/* Pagination */}
      <div style={styles.pagination}>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          style={styles.btn}
        >
          Prev
        </button>

        <span style={styles.pageInfo}>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages || totalPages === 0}
          style={styles.btn}
        >
          Next
        </button>
      </div>

      <div style={styles.container}>
        <div style={styles.card}>
          <h3>Clients</h3>
          <ClientTable clients={currentClients} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    background: "#0f172a",
    minHeight: "100vh",
    color: "white",
  },

  /* 🔥 NEW TOP BAR */
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    background: "#111827",
    borderBottom: "1px solid #1f2937",
  },

  container: { padding: 20 },

  card: {
    background: "#111827",
    border: "1px solid #1f2937",
    borderRadius: 12,
    padding: 16,
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    marginTop: "15px",
  },

  btn: {
    background: "#1f2937",
    color: "white",
    border: "1px solid #374151",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
  },

  pageInfo: {
    color: "#94a3b8",
  },
};