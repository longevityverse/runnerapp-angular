import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'locationCode', 'totalTerminalsRequired', 'issued', 'deployed', 'electricity', 'distributor', 'software', 'tested', 'finalized', 'note', 'noteTime', 'finalizeTime', 'actions'];
  dataSource = new MatTableDataSource();
  festivals: string[];
  selectedFestival: string;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.festivals = this.taskService.getFestivals();
    this.selectedFestival = this.festivals[0];
    this.filterTasks();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  filterTasks() {
    this.dataSource.data = this.taskService.getTasks().filter(task => task.festival === this.selectedFestival);
  }

  onFestivalChange() {
    this.filterTasks();
  }

  editTask(task) {
    // Logic to navigate to task details and edit
  }
}
