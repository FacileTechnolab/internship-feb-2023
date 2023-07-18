import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  toHome() {
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  }
  toAbout() {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  }
  toSpeakers() {
    document.getElementById("speakers")?.scrollIntoView({ behavior: "smooth" });

  }
  toSchedule() {
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });

  }
  toVenue() {
    document.getElementById("venue")?.scrollIntoView({ behavior: "smooth" });

  }
  toHotel() {
    document.getElementById("hotels")?.scrollIntoView({ behavior: "smooth" });

  }
  toGallery() {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });

  }
  toSponsors() {
    document.getElementById("supporters")?.scrollIntoView({ behavior: "smooth" });

  }
  toContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  }

  toTicket() {
    document.getElementById("buy-tickets")?.scrollIntoView({ behavior: "smooth" });

  }

}
