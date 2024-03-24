import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todoAppAngular';
  tasks: string[] = [];

  tasksMock = ['Hacer algo', 'Hacer más cosas', 'Hacer el workbook'];

  onTaskAdded(newTask: string) {
    this.tasks.push(newTask);
  }

  taskRemove(task: string) {
    const indexTask = this.tasks.indexOf(task);

    this.tasks.splice(indexTask, 1);
  }
}
