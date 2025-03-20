import { useState, useEffect } from "react";
import { Department } from "./types/types";
import { createDepartment, deleteDepartment, fetchDepartments, updateDepartment } from "./services/api";
import DepartmentList from "./components/DepartmentList";
import Modal from "./components/Modal";
import DepartmentForm from "./components/DepartmentForm";


function App() {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Fetch Departments on Mount
  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    const data = await fetchDepartments();
    setDepartments(data);
  };

  // ✅ Create or Update Department
  const handleSaveDepartment = async (departmentData: Department) => {
    if (departmentData.id) {
      await updateDepartment(departmentData.id, departmentData);
    } else {
      await createDepartment(departmentData);
    }
    loadDepartments(); // Refresh list after update
    setIsModalOpen(false); // Close modal
  };

  // ✅ Delete Department
  const handleDeleteDepartment = async (id: number) => {
    await deleteDepartment(id);
    loadDepartments(); // Refresh after delete
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <DepartmentList
        departments={departments}
        onEdit={(department) => {
          setSelectedDepartment(department);
          setIsModalOpen(true);
        }}
        onCreate={() => {
          setSelectedDepartment(undefined);
          setIsModalOpen(true);
        }}
        onDelete={handleDeleteDepartment} // Pass delete function
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DepartmentForm
          department={selectedDepartment}
          onSave={handleSaveDepartment} // Pass save function
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
