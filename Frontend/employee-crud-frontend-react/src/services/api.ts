const API_BASE_URL = "https://localhost:7098/api/Employee";

export const fetchEmployees = async () => {
  const response = await fetch(API_BASE_URL);
  return response.json();
};

export const getEmployeeById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  return response.json();
};

export const createEmployee = async (employee: any) => {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return response.json();
};

export const updateEmployee = async (id: string, employee: any) => {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(employee),
  });
  return response.json();
};

export const deleteEmployee = async (id: string) => {
  await fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
};
