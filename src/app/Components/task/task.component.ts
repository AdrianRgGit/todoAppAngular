import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input() tasks: string[] = [];
  @Output() taskRemove = new EventEmitter<string>();

  removeTask(task: string) {
    this.taskRemove.emit(task);
  }
}
