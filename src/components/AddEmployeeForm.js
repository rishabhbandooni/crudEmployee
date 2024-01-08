import React, { useState } from "react";

const AddEmployeeForm = ({ onAdd }) => {
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    dob: "",
    salary: 0,
    joiningDate: "",
    relievingDate: "",
    contact: "",
    status: "active",
  });

  const [errors, setErrors] = useState({
    name: "",
    dob: "",
    joiningDate: "",
    relievingDate: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user types
  };

  const handleAddEmployee = () => {
    if (!newEmployee.name) {
      setErrors({ ...errors, name: "Name is required" });
      return;
    }

    const dateFormat = /^\d{2}\/\d{2}\/\d{4}$/;
    if (
      (newEmployee.joiningDate && !newEmployee.joiningDate.match(dateFormat)) ||
      (newEmployee.relievingDate &&
        !newEmployee.relievingDate.match(dateFormat)) ||
      (newEmployee.dob && !newEmployee.dob.match(dateFormat))
    ) {
      setErrors({
        ...errors,
        joiningDate: "Invalid date format",
        relievingDate: "Invalid date format",
        dob: "Invalid date format",
      });
      return;
    }

    // Validate contact number (10 digits)
    const contactFormat = /^\d{10}$/;
    if (newEmployee.contact && !newEmployee.contact.match(contactFormat)) {
      setErrors({ ...errors, contact: "Contact should be 10 digits" });
      return;
    }

    onAdd(newEmployee);
    setNewEmployee({
      name: "",
      dob: "",
      salary: 0,
      joiningDate: "",
      relievingDate: "",
      contact: "",
      status: "active",
    });
    setErrors({
      name: "",
      dob: "",
      joiningDate: "",
      relievingDate: "",
      contact: "",
    });
  };

  return (
    <form className="mt-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={newEmployee.name}
          onChange={handleInputChange}
          className={`border rounded w-full py-2 px-3 ${
            errors.name ? "border-red-500" : ""
          }`}
          required
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          DOB:
        </label>
        <input
          type="text"
          name="dob"
          value={newEmployee.dob}
          onChange={handleInputChange}
          placeholder="MM/DD/YYYY"
          className={`border rounded w-full py-2 px-3 ${
            errors.dob ? "border-red-500" : ""
          }`}
          required
        />
        {errors.dob && (
          <p className="text-red-500 text-xs mt-1">{errors.dob}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Joining Date:
        </label>
        <input
          type="text"
          name="joiningDate"
          value={newEmployee.joiningDate}
          onChange={handleInputChange}
          placeholder="MM/DD/YYYY"
          className={`border rounded w-full py-2 px-3 ${
            errors.joiningDate ? "border-red-500" : ""
          }`}
        />
        {errors.joiningDate && (
          <p className="text-red-500 text-xs mt-1">{errors.joiningDate}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Relieving Date:
        </label>
        <input
          type="text"
          name="relievingDate"
          value={newEmployee.relievingDate}
          onChange={handleInputChange}
          placeholder="MM/DD/YYYY"
          className={`border rounded w-full py-2 px-3 ${
            errors.relievingDate ? "border-red-500" : ""
          }`}
        />
        {errors.relievingDate && (
          <p className="text-red-500 text-xs mt-1">{errors.relievingDate}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Contact:
        </label>
        <input
          type="text"
          name="contact"
          value={newEmployee.contact}
          onChange={handleInputChange}
          className={`border rounded w-full py-2 px-3 ${
            errors.contact ? "border-red-500" : ""
          }`}
          required
        />
        {errors.contact && (
          <p className="text-red-500 text-xs mt-1">{errors.contact}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Status:
        </label>
        <select
          name="status"
          value={newEmployee.status}
          onChange={handleInputChange}
          className="border rounded w-full py-2 px-3"
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button
        type="button"
        onClick={handleAddEmployee}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Employee
      </button>
    </form>
  );
};

export default AddEmployeeForm;
