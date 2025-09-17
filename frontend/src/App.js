import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from "./api";

function Home() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    API.get("/items").then(res => setItems(res.data));
  }, []);

  const addItem = async () => {
    const res = await API.post("/items", { name });
    setItems([...items, res.data]);
    setName("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sample MERN App</h1>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Enter item" />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(i => (
          <li key={i._id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <Router basename="/application1">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
