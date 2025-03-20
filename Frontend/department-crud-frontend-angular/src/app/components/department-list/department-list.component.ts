import { Component, Output, EventEmitter, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService, Department } from '../../services/department.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department-list.component.html',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  @Output() editDepartment = new EventEmitter<Department>();
  @Output() createDepartment = new EventEmitter<void>();
  @Output() refresh = new EventEmitter<void>();

  constructor(private departmentService: DepartmentService, private cdr: ChangeDetectorRef) {}


  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartment().subscribe((data) => {
      this.departments = data;
    });
  }

  deleteDepartment(id: number) {
  this.departmentService.deleteDepartment(id.toString()).subscribe(() => {
    console.log("Before Delete:", this.departments);
    this.departments = this.departments.filter(dept => dept.id !== id);
    console.log("After Delete:", this.departments);
    this.cdr.detectChanges(); // ✅ Force UI update
  });
}


  edit(department: Department) {
    this.editDepartment.emit(department);
  }
}

