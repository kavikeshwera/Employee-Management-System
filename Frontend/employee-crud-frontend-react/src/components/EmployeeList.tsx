import { Employee } from "../types/types";


const EmployeeList = ({
  employees,
  onEdit,
  onCreate,
  onDelete,
}: {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onCreate: () => void;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Employee List</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onCreate}>
          Create Emp
        </button>
      </div>
      <table className="w-full border border-gray-300 shadow-md bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Department</th>
            <th className="py-2 px-4">Salary ($)</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-t hover:bg-gray-100 transition">
              <td className="py-2 px-4 text-center">{emp.id}</td>
              <td className="py-2 px-4">{emp.name}</td>
              <td className="py-2 px-4">{emp.email}</td>
              <td className="py-2 px-4">{emp.department}</td>
              <td className="py-2 px-4 text-right">${emp.salary.toLocaleString()}</td>
              <td className="py-2 px-4 flex justify-center gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={() => onEdit(emp)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => onDelete(emp.id!)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
