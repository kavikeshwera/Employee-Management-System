import { Component } from '@angular/core';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ModalComponent } from './components/modal/modal.component'; // ✅ Import ModalComponent
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EmployeeListComponent, EmployeeFormComponent, ModalComponent], // ✅ Include ModalComponent
  templateUrl: './app.component.html',
})
export class AppComponent {
  isModalOpen = false;
  selectedEmployee: any = null;

  openCreateModal() {
    this.selectedEmployee = null;
    this.isModalOpen = true;
  }

  editEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  refreshEmployees() {
    this.isModalOpen = false;
  }
}
