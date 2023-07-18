import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactinfo',
  templateUrl: './contactinfo.component.html',
  styleUrls: ['./contactinfo.component.css']
})
export class ContactinfoComponent implements OnInit {
  // url:string= "/assets/json/contactdata.json" ;

  
    contacticon = 'icon bi bi-share flex-shrink-0'
    contaboxtitle= 'Opening Hours'
    contaboxstrong1= 'Mon-Sat:'
    contaboxdesc1= '11AM - 23PM;'
    contaboxstrong2= 'Sunday:'
    contaboxdesc2= 'Closed'



   
  
  // @Input() value: any;
  contactdata : Array<any>;
 constructor() {
  this.contactdata = [
    {
        contacticon : 'icon bi bi-map flex-shrink-0',
        contaboxtitle: 'Our Address',
        contaboxdesc:'A108 Adam Street, New York, NY 535022'
       
     
    },
    {
        
      contacticon : 'icon bi bi-envelope flex-shrink-0',
      contaboxtitle: 'Email Us',
      contaboxdesc:'contact@example.com'
     
    },
    {
      contacticon : 'icon bi bi-telephone flex-shrink-0',
      contaboxtitle: 'Call Us',
      contaboxdesc:'+1 5589 55488 55'

     
    },
  

]
  }

  ngOnInit() {
  }

}
