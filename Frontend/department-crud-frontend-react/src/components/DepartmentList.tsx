import { Department } from "../types/types";

const DepartmentList = ({
  departments,
  onEdit,
  onCreate,
  onDelete,
}: {
  departments: Department[];
  onEdit: (department: Department) => void;
  onCreate: () => void;
  onDelete: (id: number) => void;
}) => {
  return (
    <div className="max-w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Department List</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={onCreate}>
          Create Department
        </button>
      </div>
      <table className="w-full border border-gray-300 shadow-md bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Location</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept) => (
            <tr key={dept.id} className="border-t hover:bg-gray-100 transition">
              <td className="py-2 px-4 text-center">{dept.id}</td>
              <td className="py-2 px-4">{dept.name}</td>
              <td className="py-2 px-4">{dept.location}</td>
              <td className="py-2 px-4 flex justify-center gap-2">
                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={() => onEdit(dept)}>
                  Edit
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => onDelete(dept.id!)}>
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

export default DepartmentList;
