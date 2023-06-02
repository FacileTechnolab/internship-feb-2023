import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  // templateUrl: './courses.component.html',
  template:`
             <h2>{{title}}</h2>
             <h1 [textContent]="title"></h1>
             <img src="{{imageUrl}}" id="all"/>
             <img [src]="imageUrl"/> 
             <button class="btn btn-primary ">Save</button>`,
  //  templateUrl:  'courses.component.html'  ,      
  // styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
title="Hello ! Angular Application";
// imageUrl="../assets/images/festival-of-colors5-1200x800.jpg";
imageUrl="https://th.bing.com/th/id/R.7f34a70a5bee79488309934920d316cb?rik=IRJI6pSFo6OI%2fQ&riu=http%3a%2f%2fallpicts.in%2fwp-content%2fuploads%2f2018%2f03%2fNatural-Images-HD-1080p-Download-with-Keyhole-Arch-at-Pfeiffer-Beach.jpg&ehk=JPI0MFI04N62Xtd7MT1P2sw4vJgwODLsp1EcpgvuGFo%3d&risl=&pid=ImgRaw&r=0";
h = 300;
	w = 200;
	bdr = 10;
	clspn = 2;
}
