import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
})

export class CoursesComponent implements OnInit {
    title = 'courses ';
    website = ' udemy';
    courses = [
        { id: 1, name: 'course1'},
        { id: 2, name: 'course2'},
        { id: 3, name: 'course2'},
        { id: 4, name: 'course2'},
        { id: 5, name: 'course2'}
    ];
    constructor() { }

    ngOnInit() {
    }
    getWebsite() {
        return this.website;
    }

    onAdd() {
        this.courses.push({id: 4, name: 'courses'});
    }

    onRemove(course) {
        const index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    onChange(course) {
        course.name += ' Updated';
    }

    loadCourses() {
        this.courses = [
            { id: 1, name: 'course1 loaded'},
            { id: 2, name: 'course2 loaded'},
            { id: 3, name: 'course2 loaded'},
            { id: 4, name: 'course2 loaded'},
            { id: 5, name: 'course2 loaded'}
        ];
    }

    trackCourse(index, course) {
        return course ? course.id : undefined;
    }
}
