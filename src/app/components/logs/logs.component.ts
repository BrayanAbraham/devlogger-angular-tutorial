import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/Log';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean = false;

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService.stateClear.subscribe((clear) => {
      if (clear) {
        this.selectedLog = { id: null, text: null, date: null };
      }
    });

    this.logsService.getLogs().subscribe((logs) => {
      this.logs = logs;
      this.loaded = true;
    });
  }

  onSelect(log: Log) {
    this.logsService.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm('Are you sure?')) {
      this.logsService.deleteLog(log);
    }
  }
}
