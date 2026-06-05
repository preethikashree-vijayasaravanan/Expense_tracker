/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { useState } from "react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Entertainment");
  const [type, setType] = useState("expense");

  // Add Transaction
  const addTransaction = () => {
    if (!text || !amount) return;

    const newTxn = {
      id: Date.now(),
      text,
      amount: Number(amount),
      category,
      type,
    };

    setTransactions([...transactions, newTxn]);
    setText("");
    setAmount("");
  };

  // Calculations
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="app">
      {/* HEADER */}
      <div className="header">
        <h1>
          spend<span>wise</span>
        </h1>
        <button className="date">March 2026</button>
      </div>

      {/* TOP CARDS */}
      <div className="cards">
        <div className="card income">
          <p>TOTAL INCOME</p>
          <h2>₹{income}</h2>
        </div>

        <div className="card expense">
          <p>TOTAL EXPENSES</p>
          <h2>₹{expense}</h2>
        </div>

        <div className="card balance">
          <p>BALANCE</p>
          <h2>₹{income - expense}</h2>
        </div>
      </div>

      {/* FORM + CATEGORY */}
      <div className="form-section">
        {/* LEFT FORM */}
        <div className="form">
          <input
            type="text"
            placeholder="Enter description"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          {/* CATEGORY DROPDOWN */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Entertainment</option>
            <option>Shopping</option>
            <option>Medicine</option>
            <option>Education</option>
            <option>Others</option>
          </select>

          {/* TYPE */}
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button onClick={addTransaction}>Add Transaction</button>
        </div>

        {/* RIGHT CATEGORY PANEL */}
        <div className="category-box">
          <h3>Expense by Category</h3>

          {/* Example Static Bar (can upgrade later) */}
          <div className="bar">
            <span>Food</span>
            <div className="progress"></div>
            <span>₹100</span>
          </div>
        </div>
      </div>

      {/* TRANSACTION LISTS */}
      <div className="lists">
        {/* INCOME LIST */}
        <div className="list">
          <h3>Income</h3>
          {transactions
            .filter((t) => t.type === "income")
            .map((t) => (
              <div key={t.id} className="item green">
                {t.text} ({t.category}) ₹{t.amount}
              </div>
            ))}
        </div>

        {/* EXPENSE LIST */}
        <div className="list">
          <h3>Expense</h3>
          {transactions
            .filter((t) => t.type === "expense")
            .map((t) => (
              <div key={t.id} className="item red">
                {t.text} ({t.category}) ₹{t.amount}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;