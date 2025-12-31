import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://<EC2_PUBLIC_IP>:5000/api/message")
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
