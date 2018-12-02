import { Component } from '@angular/core';

@Component({
    selector: 'courses', 
    template: `<h2>{{ "List of " + title + getWebsite()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{ course }}
        </li>
    </ul>
    `
})

export class CoursesComponent {
    title = "courses ";
    website = " udemy";
    courses = ["course1", "course2"] ;

    getWebsite() {
        return this.website;

    }
}