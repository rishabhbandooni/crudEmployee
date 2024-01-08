import React, { useState, useEffect } from "react";
import axios from "axios";
import EmployeeTable from "./components/EmployeeTable";
import AddEmployeeForm from "./components/AddEmployeeForm";
import EditEmployeeModal from "./components/EditEmployeeModal";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/employees")
      .then((response) => setEmployees(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    axios
      .post("http://localhost:3001/api/employees", newEmployee)
      .then((response) => setEmployees([...employees, response.data]))
      .catch((error) => console.error("Error adding employee: ", error));
  };

  const handleDeleteEmployee = (id) => {
    axios
      .delete(`http://localhost:3001/api/employees/${id}`)
      .then(() => setEmployees(employees.filter((emp) => emp.id !== id)))
      .catch((error) => console.error("Error deleting employee: ", error));
  };

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEditModalOpen(true);
  };

  const handleEditSave = (editedEmployee) => {
    axios
      .put(
        `http://localhost:3001/api/employees/${editedEmployee.id}`,
        editedEmployee
      )
      .then(() => {
        setEmployees(
          employees.map((emp) =>
            emp.id === editedEmployee.id ? editedEmployee : emp
          )
        );
        setEditModalOpen(false);
      })
      .catch((error) => console.error("Error updating employee: ", error));
  };

  const handleEditClose = () => {
    setSelectedEmployee(null);
    setEditModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Employee Management</h1>
      <EmployeeTable
        employees={employees}
        onDelete={handleDeleteEmployee}
        onEdit={handleEditClick}
      />
      <h2 className="text-2xl font-bold mt-8 mb-4">Add Employee</h2>
      <AddEmployeeForm onAdd={handleAddEmployee} />

      {editModalOpen && (
        <EditEmployeeModal
          employee={selectedEmployee}
          onSave={handleEditSave}
          onClose={handleEditClose}
        />
      )}
    </div>
  );
};

export default App;
