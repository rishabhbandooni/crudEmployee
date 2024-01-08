import React, { useState } from "react";
import EditEmployeeModal from "./EditEmployeeModal";

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setEditModalOpen(true);
  };

  const handleEditSave = (editedEmployee) => {
    onEdit(editedEmployee);
    setEditModalOpen(false);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  return (
    <div>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Joining Date</th>
            <th className="px-4 py-2">Relieving Date</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.dob}</td>
              <td className="border px-4 py-2">{employee.salary}</td>
              <td className="border px-4 py-2">{employee.joiningDate}</td>
              <td className="border px-4 py-2">
                {employee.relievingDate || "N/A"}
              </td>
              <td className="border px-4 py-2">{employee.contact}</td>
              <td className="border px-4 py-2">{employee.status}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEditClick(employee)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default EmployeeTable;
