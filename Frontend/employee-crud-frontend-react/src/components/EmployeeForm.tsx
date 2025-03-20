import { useState, useEffect } from "react";
import { Employee } from "../types/types";


const EmployeeForm = ({
  employee,
  onSave,
  onClose,
}: {
  employee?: Employee;
  onSave: (employee: Employee) => void;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Employee>({
    name: "",
    email: "",
    department: "",
    salary: 0,
  });

  useEffect(() => {
    if (employee) {
      setFormData(employee);
    } else {
      setFormData({ name: "", email: "", department: "", salary: 0 });
    }
  }, [employee]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "salary" ? Number(value) : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Call save function
    onClose(); // ✅ Close modal after saving
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">{employee ? "Edit Employee" : "Create Employee"}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
        <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full p-2 border rounded" required />
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" className="w-full p-2 border rounded" required min="0" />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">{employee ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
