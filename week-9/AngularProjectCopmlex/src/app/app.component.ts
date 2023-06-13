import { Component } from '@angular/core';
import {UsersserviceService} from './usersservice.service';
interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},

	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},



];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularProjectCopmlex';


  alerts: Alert[];

	constructor() {
		this.reset();
	}

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}
   
	// pass to data parent to child
	Value = "This is parent data ";

	// reusable comp
	data = {
		name: 'Ashish',
		chanel: 'Testy codeiz'
	}

	detail = [{
		pname: 'Mono',
		pprize : 300000
	},
	{
		pname: 'Kono',
		pprize : 90430
	},
	{
		pname: 'Dono',
		pprize : 3007800
	}

]

// send child to parent comp
name = "";
formParent(info : any){
console.log(info);

 this.name = info.name;
}


// built-in pipe
authorname = "Peter parker";
today = Date.now();
str = "Hellll.... Angular";
money = 100
}
