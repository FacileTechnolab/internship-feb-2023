import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  // templateUrl: './courses.component.html',
  template:`
             <h2>{{title}}</h2>
             <h1 [textContent]="title"></h1>
             <img src="{{imageUrl}}" id="all"/>
             <img [src]="imageUrl"/> 
             <button class="btn btn-danger " style="padding: 20px;   margin: 2rem;" [class.active]="isactive" >Save</button><br>
             <button [style.backgroundColor]="isactive?'blue':'yellow'" >Save</button><br>
             <div (click)="onDivClick()"><br>
             <button (click)="onSave($event)">Save</button><br>
             </div>
             <!-- <input (keyup)="OnKeyUp($event)" />  for the use of enter event on the help of $event-->
             <input  (keyup.enter)="OnKeyUp()"/><br>
             <input (keyup.enter)="OnKey_Up($event)"/><br>
             <!-- <input #email (keyup.enter)="OnKyUp(email.value)"/> -->
             <input [value]="email" (keyup.enter)=" OnkeyUp($event)"/>`,
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
  isactive=true;
  onDivClick(){
    alert("hello your button is clicked");
  }
  onSave($event){
    // $event.stopPropagation(); use for only show the one event
    console.log("hello world"+$event);
  }
  // OnKeyUp($event){
  //        if($event.keyCode ==13)
  //             console.log("enter was pressed");
  // }
  OnKeyUp(){
        
              console.log("enter was pressed");
  }
  OnKey_Up($event){
    console.log($event.target.value);
  }
  OnKyUp(email){
    console.log(email);
  }
  email="xyz@gmail.com";
  OnkeyUp($event){
      console.log($event.target.value);
  }
 
}
