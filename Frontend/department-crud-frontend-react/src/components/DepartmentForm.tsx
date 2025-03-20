import { useState, useEffect } from "react";
import { Department } from "../types/types";


const DepartmentForm = ({
  department,
  onSave,
  onClose,
}: {
  department?: Department;
  onSave: (department: Department) => void;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<Department>({
    name: "",
    location: "",
  });

  useEffect(() => {
    if (department) {
      setFormData(department);
    } else {
      setFormData({ name: "", location: "" });
    }
  }, [department]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData); // Call save function
    onClose(); // ✅ Close modal after saving
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-center mb-4">{department ? "Edit Department" : "Create Department"}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">{department ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default DepartmentForm;
