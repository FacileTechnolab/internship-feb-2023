
import { AnimationPlayer } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from './../../service/cart.service';
interface tab{

    img: string,
    head: string,
    h1: string,
    h2: string,
    icon :string,
    file:string  
}
@Component({
  selector: 'app-shopbox',
  templateUrl: './shopbox.component.html',
  styleUrls: ['./shopbox.component.css']
})


export class ShopboxComponent implements OnInit {
  Images:tab[]=[];
  filimage:tab[]=this.Images;

  url: string="/assets/json/shopbox.json"
  boxdata:any
  sea:any
  fruit:any

public shopItemList: any

  constructor(private http: HttpClient, private CartService : CartService) { }


  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.boxdata = res; 
       this.Images = this.boxdata; 
      this.filimage = this.Images;
      
      
    });
    this.shopItemList.foreach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price});
    });
   
  }

  addtocart(shopdata:any){
    this.CartService.addtoCart(shopdata);
 }
  onShop(){
    document.getElementById("main")?.scrollIntoView({behavior: 'smooth'})
  }
  filter(file:string): void {
    if(file === 'all'){
      
      this.filimage=this.Images;
    }
    else{
   
     this.filimage=this.Images.filter( tab => tab.file === file)
     debugger;
     console.log(this.filimage)
     
    }
  }



}

