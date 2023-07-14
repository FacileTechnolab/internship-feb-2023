import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Ticket',
  templateUrl: './Ticket.component.html',
  styleUrls: ['./Ticket.component.css']
})
export class TicketComponent implements OnInit {
  title = "Buy Tickets";
  desc = "Velit consequatur consequatur inventore iste fugit unde omnis eum aut.";
  url: string = "/assets/json/ticketdetails.json"
  ticketdetail: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.ticketdetail = res;
      console.log('icon', this.ticketdetail)
    });
  }

}
