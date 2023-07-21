import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-innermembeership2',
  templateUrl: './innermembeership2.component.html',
  styleUrls: ['./innermembeership2.component.css']
})
export class Innermembeership2Component implements OnInit {
title="Please join us!";
title2="Become a member";


onSubmit(data:any) {
  console.warn(data);
alert("successful registration ");


  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToVotes($myParam: string = ''): void {
    const navigationDetails: string[] = [''];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
 
 
// call this inbuilt method to reset the form
  

}
