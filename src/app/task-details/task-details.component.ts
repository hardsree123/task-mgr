import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  @Input() taskDetail: any;

  constructor() {}

  ngOnInit() {}
}
