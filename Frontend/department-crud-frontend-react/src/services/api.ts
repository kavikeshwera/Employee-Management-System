import axios from "axios";
import { Department } from "../types/types";


const API_URL = "http://localhost:8000/api/departments"; 

export const fetchDepartments = async (): Promise<Department[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createDepartment = async (department: Department) => {
  await axios.post(API_URL, department);
};

export const updateDepartment = async (id: number, department: Department) => {
  await axios.put(`${API_URL}/${id}`, department);
};

export const deleteDepartment = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
