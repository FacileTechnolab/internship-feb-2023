import { Component } from '@angular/core';

@Component({
  selector: 'app-newslatter',
  templateUrl: './newslatter.component.html',
  styleUrls: ['./newslatter.component.css']
})
export class NewslatterComponent {
  "title" = "Newsletter";
  "desc" = "Rerum numquam illum recusandae quia mollitia consequatur.";
  "des" = "Subscribe";
  "news": any;
  onSubmit(data: any) {

    console.warn(data);
    alert("success");

  }


}
