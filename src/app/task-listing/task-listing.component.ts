import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css'],
})
export class TaskListingComponent implements OnInit {
  constructor() {}

  month = 'April';
  ngOnInit() {}

  dateRange: any = [
    {
      day: 'Wed',
      date: '15',
    },
    {
      day: 'Thu',
      date: '16',
    },
    {
      day: 'Fri',
      date: '17',
    },
    {
      day: 'Sat',
      date: '18',
    },
    {
      day: 'Sun',
      date: '19',
    },
  ];

  taskList: any = [
    {
      date: '16',
      tasks: [
        {
          startTime: '12:30',
          endTime: '13:30',
          taskName: 'Meeting with bob',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
        {
          startTime: '15:30',
          endTime: '16:30',
          taskName: 'Meeting with rob',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
        {
          startTime: '08:30',
          endTime: '09:30',
          taskName: 'Meeting with van',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
      ],
    },
    {
      date: '18',
      tasks: [
        {
          startTime: '14:30',
          endTime: '15:30',
          taskName: 'Meeting with bob',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
        {
          startTime: '10:30',
          endTime: '11:30',
          taskName: 'Meeting with rob',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
        {
          startTime: '08:30',
          endTime: '09:30',
          taskName: 'Meeting with alina',
          required: [
            {
              name: 'Anita',
              avatar: '',
            },
            {
              name: 'Mike',
              avatar: '',
            },
          ],
        },
      ],
    },
  ];

  selectedDate: number;
  selectedDayTask: any = [];
  daySelected(element) {
    this.selectedDate = element.date;

    this.selectedDayTask = this.taskList.find((x) => x.date === element.date);
    console.log(this.selectedDayTask);
  }

  week = [];
  getWeeks() {
    let curr = new Date();
    for (let i = 1; i <= 7; i++) {
      let first = curr.getDate() - curr.getDay() + i;
      let day = new Date(curr.setDate(first));
      this.week.push({ day: Date() });
    }
  }
  getAllWeeks() {
    // let currentDate = new Date();
    // let startDate = new Date(currentDate.getFullYear(), 0, 1);
    // var days = Math.floor((currentDate - startDate) /
    //     (24 * 60 * 60 * 1000));
    // var weekNumber = Math.ceil(days / 7);
    // // Display the calculated result
    // document.write("Week number of " + currentDate +
    //     " is :   " + weekNumber);
  }
}
