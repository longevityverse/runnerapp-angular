import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = [
    { id: 1, name: 'Bar 15 C Malfi', locationCode: 'Alchemy', totalTerminalsRequired: 1, issued: true, deployed: true, electricity: true, distributor: true, software: true, tested: true, finalized: true, note: 'paramozva', noteTime: '02/15 12:08:49', finalizeTime: '02/15 12:08:55', festival: 'Saga 2024' },
    { id: 2, name: 'Bar 1 General', locationCode: 'Al Wasl', totalTerminalsRequired: 4, issued: true, deployed: true, electricity: true, distributor: true, software: true, tested: true, finalized: true, note: 'paramozva', noteTime: '02/15 10:42:37', finalizeTime: '02/15 10:52:16', festival: 'Saga 2024' },
    { id: 3, name: 'BAR 1A Budweiser', locationCode: 'Al Wasl', totalTerminalsRequired: 2, issued: true, deployed: true, electricity: true, distributor: true, software: true, tested: true, finalized: true, note: 'paramozva', noteTime: '02/15 10:26:51', finalizeTime: '02/15 10:52:17', festival: 'Sziget 2024' },
    // More sample tasks...
  ];

  constructor() { }

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id);
  }

  getFestivals() {
    return [...new Set(this.tasks.map(task => task.festival))];
  }
}
