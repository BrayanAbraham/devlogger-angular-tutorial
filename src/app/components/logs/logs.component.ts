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
  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService.getLogs().subscribe((logs) => (this.logs = logs));
  }

  onSelect(log: Log) {
    this.logsService.setFormLog(log);
  }
}
