// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let employees = [];

app.get("/api/employees", (req, res) => {
  res.json(employees);
});

app.post("/api/employees", (req, res) => {
  const newEmployee = req.body;
  employees.push(newEmployee);
  res.json(newEmployee);
});

app.put("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  const updatedEmployee = req.body;
  employees = employees.map((emp) => (emp.id === id ? updatedEmployee : emp));
  res.json(updatedEmployee);
});

app.delete("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  employees = employees.filter((emp) => emp.id !== id);
  res.json({ message: "Employee deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
