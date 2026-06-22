export default function Header({ total, active, blocked, search, setSearch }) {
  return (
    <div style={styles.wrapper}>

      {/* LEFT */}
      <div style={styles.left}>
        <div style={styles.title}>Client Dashboard</div>
        <div style={styles.subtitle}>Real-time system overview</div>
      </div>

      {/* CENTER (optional search placeholder) */}
    <input
    placeholder="Search by IP, email, name..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={styles.search}
    />

      {/* RIGHT - REAL METRICS */}
      <div style={styles.right}>

        <div style={styles.metric}>
          <div style={styles.metricValue}>{total}</div>
          <div style={styles.metricLabel}>Total</div>
        </div>

        <div style={styles.metric}>
          <div style={{ ...styles.metricValue, color: "#22c55e" }}>
            {active}
          </div>
          <div style={styles.metricLabel}>Active</div>
        </div>

        <div style={styles.metric}>
          <div style={{ ...styles.metricValue, color: "#ef4444" }}>
            {blocked}
          </div>
          <div style={styles.metricLabel}>Blocked</div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "14px 20px",
    borderBottom: "1px solid #1f2937",
    background: "#0b1220",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  left: {
    display: "flex",
    flexDirection: "column",
  },

  title: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#e5e7eb",
  },

  subtitle: {
    fontSize: "12px",
    color: "#64748b",
    marginTop: "2px",
  },

  center: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  search: {
    width: "60%",
    maxWidth: "420px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #1f2937",
    background: "#111827",
    color: "#e5e7eb",
    outline: "none",
  },

  right: {
    display: "flex",
    gap: "18px",
  },

  metric: {
    textAlign: "center",
    minWidth: "50px",
  },

  metricValue: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#e5e7eb",
  },

  metricLabel: {
    fontSize: "11px",
    color: "#64748b",
  },
};