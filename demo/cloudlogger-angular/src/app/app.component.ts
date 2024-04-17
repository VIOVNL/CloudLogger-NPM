import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CloudLogger, CloudLoggerItem } from '@viovnl/cloudlogger';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'cloudlogger-angular';
  constructor() {}

  ngOnInit(): void {
    CloudLogger.Create('your_project_secret');
  }

  onClickLog(): void {
    try {
      const logs: CloudLoggerItem[] = [
        { Name: 'Date', Value: '22-10-1994' },
        { Name: 'Country', Value: 'Netherlands' },
      ];
      CloudLogger.Log(logs);
    } catch (e) {
      console.log('error', e);
    }
  }
}


