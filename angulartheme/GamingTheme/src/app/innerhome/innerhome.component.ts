import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-innerhome',
  templateUrl: './innerhome.component.html',
  styleUrls: ['./innerhome.component.css']
})
export class InnerhomeComponent implements OnInit {
  url: string = "assets/jsondata/home.json"
  
  constructor(private http: HttpClient) { }
  home: any;
  data:any;
 

url2: string ="assets/jsondata/feturesicon.json"
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.home = res;
      console.log(res);
     
    });
    this.http.get(this.url2).subscribe(res => {
      this.data = res;
      
    });
    console.log("boxing",this.home);
   
    
  }
 
  onSubmit(userForm:any) {
    console.warn(userForm.value);
   
    userForm.reset();
    }


}
