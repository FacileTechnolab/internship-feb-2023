import { Component } from "@angular/core";
@Component({
    selector:'app-courses',
    template:'<h2>Courses</h2>',
    
})
export class CoursesService{
getCourses(){
    return ["course1","course2","course3"];
}
}