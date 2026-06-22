export default function ClientDetailsModal({ client, onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal} className="shadow-lg">

        {/* Header */}
        <div style={styles.header}>
          <h4 style={{ margin: 0 }}>Client Details</h4>

          <button onClick={onClose} style={styles.closeBtn}>
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={styles.body}>
          <div style={styles.row}>
            <span style={styles.label}>IP</span>
            <span style={styles.value}>{client.ip}</span>
          </div>

          <div style={styles.row}>
            <span style={styles.label}>Name</span>
            <span style={styles.value}>{client.name || "-"}</span>
          </div>

          <div style={styles.row}>
            <span style={styles.label}>Email</span>
            <span style={styles.value}>{client.email || "-"}</span>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button className="btn btn-primary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },

  modal: {
    width: "380px",
    background: "#111827",
    color: "#e5e7eb",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #1f2937",
  },

  header: {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #1f2937",
  },

  body: {
    padding: "16px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #1f2937",
  },

  label: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  value: {
    fontWeight: "500",
  },

  footer: {
    padding: "12px 16px",
    display: "flex",
    justifyContent: "flex-end",
    borderTop: "1px solid #1f2937",
  },

  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "18px",
    cursor: "pointer",
  },
};