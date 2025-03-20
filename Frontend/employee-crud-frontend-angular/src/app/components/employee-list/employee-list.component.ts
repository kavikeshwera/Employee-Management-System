import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], // ✅ Ensure CommonModule is imported
  templateUrl: './employee-list.component.html',
})
export class EmployeeListComponent implements OnInit {
  @Output() editEmployee = new EventEmitter<any>();
  @Output() createEmployee = new EventEmitter<void>();

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.loadEmployees());
  }

  edit(emp: any) {
    this.editEmployee.emit(emp);
  }
}
