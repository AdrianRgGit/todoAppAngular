import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  @Output() taskAdded = new EventEmitter<string>();
  newTask: string = '';
  showForm: boolean = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addTask() {
    if (this.newTask.trim() !== '') {
      this.taskAdded.emit(this.newTask);
      this.newTask = '';
    }
  }
}
