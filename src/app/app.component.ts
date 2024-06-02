import { Component } from '@angular/core';
import { ExcelImportService } from './excel-import.service';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'runner-app';

  constructor(private excelImportService: ExcelImportService, private taskService: TaskService) { }

  importExcel(event: any) {
    this.excelImportService.importExcel(event);
  }

  exportExcel() {
    const tasks = this.taskService.getTasks();
    this.excelImportService.exportExcel(tasks, 'tasks');
  }
}
