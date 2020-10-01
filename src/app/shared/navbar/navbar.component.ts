import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openBusinessPage() {
    this.router.navigate(["/our-businesses"]);
  }

  openAvalonPage(){
    this.router.navigate(["/avalon-beauty"]);
  }
  openLaedershipPage(id){
    this.router.navigate([`/leadershp/${id}`]);
  }

  openJobPage(){
    this.router.navigate(["/job-opportunity"]);
  }
  openContactPage(){
    this.router.navigate(["/contact"]);
  }
  openbrandPage(){
    this.router.navigate(["/brand-assocate"]);
  }
}
