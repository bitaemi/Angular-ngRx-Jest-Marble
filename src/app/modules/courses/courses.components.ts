import { Component } from '@angular/core';

@Component({
    selector: 'app-courses',
    template: 'courses.component.html',
})

export class CoursesComponent {
    title = 'courses ';
    website = ' udemy';
    courses = ['course1', 'course2'] ;

    getWebsite() {
        return this.website;
    }
}
