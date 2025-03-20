import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Department {
  id?: number;
  name: string;
  location: string;
  
}

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiUrl = 'http://localhost:8000/api/departments';

  constructor(private http: HttpClient) {}

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  createDepartment(department: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, department);
  }

  updateDepartment(id: string, department: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, department);
  }

  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
