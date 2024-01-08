import React, { useState, useEffect } from "react";

const EditEmployeeModal = ({ employee, onSave, onClose }) => {
  const [editedEmployee, setEditedEmployee] = useState({ ...employee });

  useEffect(() => {
    setEditedEmployee({ ...employee });
  }, [employee]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee({ ...editedEmployee, [name]: value });
  };

  const handleSave = () => {
    onSave(editedEmployee);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-800 bg-opacity-75 fixed inset-0"></div>
      <div className="bg-white p-8 rounded shadow-lg z-10">
        <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={editedEmployee.name}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              DOB:
            </label>
            <input
              type="text"
              name="dob"
              value={editedEmployee.dob}
              onChange={handleInputChange}
              placeholder="MM/DD/YYYY"
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Salary:
            </label>
            <input
              type="number"
              name="salary"
              value={editedEmployee.salary}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Joining Date:
            </label>
            <input
              type="text"
              name="joiningDate"
              value={editedEmployee.joiningDate}
              onChange={handleInputChange}
              placeholder="MM/DD/YYYY"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Relieving Date:
            </label>
            <input
              type="text"
              name="relievingDate"
              value={editedEmployee.relievingDate}
              onChange={handleInputChange}
              placeholder="MM/DD/YYYY"
              className="border rounded w-full py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contact:
            </label>
            <input
              type="text"
              name="contact"
              value={editedEmployee.contact}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Status:
            </label>
            <select
              name="status"
              value={editedEmployee.status}
              onChange={handleInputChange}
              className="border rounded w-full py-2 px-3"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
