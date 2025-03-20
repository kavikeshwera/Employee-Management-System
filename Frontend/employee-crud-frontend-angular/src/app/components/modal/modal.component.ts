import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true, // ✅ Ensures it's a standalone component
  imports: [CommonModule], // ✅ Import CommonModule for Angular directives
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() onClose = new EventEmitter<void>(); // ✅ Emits an event to close the modal
}
