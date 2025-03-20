import { useState, useEffect } from "react";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import Modal from "./components/Modal";
import { fetchEmployees, createEmployee, updateEmployee, deleteEmployee } from "./services/api";
import { Employee } from "./types/types";


function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>(undefined);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ✅ Fetch Employees (Runs on mount)
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const data = await fetchEmployees();
    setEmployees(data);
  };

  // ✅ Create or Update Employee
  const handleSaveEmployee = async (employeeData: Employee) => {
    if (employeeData.id) {
      await updateEmployee(employeeData.id.toString(), employeeData);
    } else {
      await createEmployee(employeeData);
    }
    loadEmployees(); // Reload after update
    setIsModalOpen(false); // Close modal
  };

  // ✅ Delete Employee
  const handleDeleteEmployee = async (id: number) => {
    await deleteEmployee(id.toString());
    loadEmployees(); // Reload after delete
  };

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <EmployeeList
        employees={employees}
        onEdit={(employee) => {
          setSelectedEmployee(employee);
          setIsModalOpen(true);
        }}
        onCreate={() => {
          setSelectedEmployee(undefined);
          setIsModalOpen(true);
        }}
        onDelete={handleDeleteEmployee} // Pass delete function
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EmployeeForm
          employee={selectedEmployee}
          onSave={handleSaveEmployee} // Pass save function
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
