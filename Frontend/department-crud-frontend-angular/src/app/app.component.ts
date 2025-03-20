import { Component, ViewChild } from '@angular/core';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { ModalComponent } from './components/modal/modal.component'; // ✅ Import ModalComponent
import { CommonModule } from '@angular/common';
import { Department } from './services/department.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DepartmentListComponent, DepartmentFormComponent, ModalComponent], // ✅ Include ModalComponent
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild(DepartmentListComponent) departmentList!: DepartmentListComponent;
  isModalOpen = false;
  selectedDepartment: Department | null = null;

  openCreateModal() {
    this.selectedDepartment = null;
    this.isModalOpen = true;
  }

  editDepartment(department: Department) {
    this.selectedDepartment = department;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  refreshDepartment() {
    this.isModalOpen = false;
    this.departmentList.loadDepartments(); // ✅ Refresh table
  }

  refreshAfterDelete() {
    this.departmentList.loadDepartments(); // ✅ Ensure delete also refreshes table
  }
}




