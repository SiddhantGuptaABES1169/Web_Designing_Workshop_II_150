import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#dcdcdc",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          width: "400px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "blue",
            marginBottom: "25px",
          }}
        >
          Student Registration Form
        </h1>

        <input
          type="text"
          placeholder="Student Name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #555",
            borderRadius: "8px",
            fontSize: "18px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #555",
            borderRadius: "8px",
            fontSize: "18px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #555",
            borderRadius: "8px",
            fontSize: "18px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="text"
          placeholder="Course"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #555",
            borderRadius: "8px",
            fontSize: "18px",
            boxSizing: "border-box",
          }}
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #555",
            borderRadius: "8px",
            fontSize: "18px",
            boxSizing: "border-box",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;