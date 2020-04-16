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
  isNew: boolean = true;

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
        this.isNew = false;
      }
    });
  }

  onSubmit() {
    if (this.isNew) {
      const newLog = {
        id: this.generateID(),
        text: this.text,
        date: new Date(),
      };
      this.logsService.addLog(newLog);
      console.log('add');
    } else {
      const updLog = {
        id: this.id,
        text: this.text,
        date: new Date(),
      };
      this.logsService.updateLog(updLog);
      console.log('update');
    }
  }

  generateID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
