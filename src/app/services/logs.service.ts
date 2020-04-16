import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Generated Components',
        date: new Date('12/26/2017 12:54:23'),
      },
      { id: '2', text: 'Added Login', date: new Date('12/27/2017 9:33:13') },
      {
        id: '3',
        text: 'Added Logs Component',
        date: new Date('12/27/2017 12:00:23'),
      },
    ];
  }

  getLogs() {
    return this.logs;
  }
}
