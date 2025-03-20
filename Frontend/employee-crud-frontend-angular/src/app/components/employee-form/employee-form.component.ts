import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Employee {
  id?: string;  // ✅ Make id optional
  name: string;
  email: string;
  department: string;
  salary: number;
}

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-form.component.html',
})
export class EmployeeFormComponent {
  @Input() employee: Employee = {
    id: undefined, // ✅ Ensure id is defined
    name: '',
    email: '',
    department: '',
    salary: 0,
  };

  @Output() refresh = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  saveEmployee() {
    console.log('Saving Employee:', this.employee);
  }
}
