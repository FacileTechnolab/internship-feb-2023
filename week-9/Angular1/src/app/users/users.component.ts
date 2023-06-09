import { Component,OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
@Input() value:any;
ngOnInit(){
  console.warn(this.value);
}

}
