import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private readonly backendUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.backendUrl}/department/`);
  }

  save(department: Department): Observable<Department> {
    return this.http.post<Department>(
      `${this.backendUrl}/department/`,
      department
    );
  }

  update(department: Department): Observable<Department> {
    return this.http.put<Department>(
      `${this.backendUrl}/department/${department.departmentId}`,
      department
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.backendUrl}/department/${id}`);
  }
}
