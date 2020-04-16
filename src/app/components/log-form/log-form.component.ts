import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  id: string;
  text: string;
  date: any;

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
}
