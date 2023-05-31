import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  
  template:`
  <h1>{{"Title: "+title + " "+getinfo()}}</h1>
  <ul>
    <li *ngFor="let course of courses ">{{ course}}</li>
  </ul>
  `
})
export class CourseComponent {
title="List of courses";

getinfo(){
  return this.title;
}
courses=["course1","course2","course3"];
}
