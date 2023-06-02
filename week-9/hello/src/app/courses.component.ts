import { Component } from '@angular/core';
@Component({
    selector:'app-courses',
    // template:'<h2>{{ title }}</h2>'
    // template:'<h2>{{ "Title:" + title }}</h2>'
    template:'<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent{
    title = "List of courses";

    getTitle(){
        return this.title;

    }
}