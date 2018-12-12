import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-course-form',
  templateUrl: './create-course-form.component.html',
  styleUrls: ['./create-course-form.component.scss']
})
export class CreateCourseFormComponent implements OnInit {

  courses = [];
  courseName: string;
  categories = [
    { id: 1, name: 'Development'},
    { id: 2, name: 'Front-end Development'},
    { id: 3, name: 'Back-endDevelopment'}
  ];
  checkBoxText = '30-money-back guarantee';
  constructor() { }

  ngOnInit() {
  }

  createCourse(f, course, cc) {
    this.courses.push({courseName: course, courseCategory: cc});
    console.log(f);
    console.log(this.courses);
  }

}
