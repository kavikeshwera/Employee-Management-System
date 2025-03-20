import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentService, Department } from '../../services/department.service';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './department-form.component.html',
})
export class DepartmentFormComponent {
  @Input() department: Department = {
    id: undefined, // ✅ Ensure id is defined
    name: '',
    location: '',
  };

  @Output() refresh = new EventEmitter<void>(); // ✅ Emits an event to refresh the list
  @Output() close = new EventEmitter<void>(); // ✅ Emits an event to close the modal

  constructor(private departmentService: DepartmentService) {}

  saveDepartment() {
  const departmentData = { ...this.department };

  if (!departmentData.id) {
    delete departmentData.id; // ✅ Remove id when creating
  }

  if (this.department.id) {
    this.departmentService.updateDepartment(this.department.id.toString(), departmentData).subscribe(() => {
      this.refresh.emit(); // ✅ Refresh list after update
      this.close.emit(); // ✅ Close modal
    });
  } else {
    this.departmentService.createDepartment(departmentData).subscribe(() => {
      this.refresh.emit(); // ✅ Refresh list after creating
      this.close.emit();
    });
  }
}


}
