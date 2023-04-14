import React from "react";

function ConfirmDeletePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h2
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}
      >
        Confirm Deletion
      </h2>
      <p
        style={{ fontSize: "18px", textAlign: "center", marginBottom: "30px" }}
      >
        Are you sure you want to delete the data? This action cannot be undone.
      </p>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "#e74c3c",
            color: "#fff",
          }}
        >
          Yes
        </button>
        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            backgroundColor: "#3498db",
            color: "#fff",
          }}
        >
          No
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeletePage;
