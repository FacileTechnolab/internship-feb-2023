import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
interface tab {
  class: string,
  img1: string,
  name1: string,
  desc1: string,
  type: string


}
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  Images: tab[] = [];
  filteredImages: tab[] = this.Images;
  home: any;
  list: any;
  //tabs: string[] = ['ALL', 'POPULAR', 'LATEST', 'FOLLOWING', 'UPCOMMING'];
  constructor(private http: HttpClient) { }
  url: string = "/assets/json/filter.json";

  tab1 = "all";
  tab2 = "popular";
  tab3 = "latest";
  tab4 = "following";
  tab5 = "upcoming";


  // theight = "{'height': 2000px}"
  filterImages(type: string): void {
    if (type === 'all') {
      this.filteredImages = this.Images;
    }
    else {
      this.filteredImages = this.Images.filter(tab => tab.type === type);
    }

  }
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {

      this.home = res;
      // this.list = this.home;
      this.Images = this.home;
      //debugger
      // this.theight = this.theight;

      console.log('icon', this.home)
    });
  }
  // }
  // onevent() {
  //   // debugger
  //   this.list = this.home.filter((x: any) => x.type == "popular")

  // }
  // onlatest() {
  //   this.list = this.home.filter((b: any) => b.type == "latest")
  // }
  // alllist() {
  //   this
  //     .list = this.home
  //   debugger
  //   this.list = this.theight
  // }
  // onfollow() {
  //   this.list = this.home.filter((y: any) => y.type == "following")
  // }
  // onup() {
  //   this.list = this.home.filter((a: any) => a.type == "upcoming")
  // }

}
