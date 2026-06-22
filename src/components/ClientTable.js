import { useState } from "react";
import ClientDetailsModal from "./ClientDetailsModal";

export default function ClientTable({ clients }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>IP</th>
            <th>Name</th>
            <th>Email</th>
            <th>HadRun</th>
            <th>Blocked</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((c) => (
            <tr key={c._id}>
              <td>{c.ip}</td>
              <td>{c.name || "-"}</td>
              <td>{c.email || "-"}</td>
              <td>{c.hadRun ? "Yes" : "No"}</td>
              <td>{c.blocked ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => setSelected(c)}
                  style={styles.viewBtn}
                  title="View client details"
                >
                  <span style={{ marginRight: 6 }}>👁</span>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <ClientDetailsModal
          client={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
  },
  viewBtn: {
    background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
    color: "white",
    border: "none",
    padding: "6px 10px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "12px",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    transition: "all 0.2s ease",
  }
};