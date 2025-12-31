import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://44.205.8.127:5000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div style={{ padding: "40px", fontSize: "24px" }}>
      <h1>Dynamic Website</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
