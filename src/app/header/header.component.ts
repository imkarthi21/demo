import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fixedHeader: boolean = false;
  closeToggler: boolean = false;
  openToggler: boolean = true;
  btnShadow: boolean = true;
  logoSize: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll') onScroll(e: Event): void {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 50) {
      this.fixedHeader = true;
      this.btnShadow = false;
      this.logoSize = true;



    } else {
      this.fixedHeader = false;
      this.btnShadow = true;
      this.logoSize = false;

    }
  }

  toggle(val) {
    if (val == "open") {
      this.closeToggler = true;
      this.openToggler = false;

      (<HTMLInputElement>document.getElementsByClassName('nav-list-block')[0]).style.display = "block";
      (<HTMLInputElement>document.getElementsByClassName('main-header')[0]).style.background = "#fff";


    }
    else {
      this.closeToggler = false
      this.openToggler = true;
      (<HTMLInputElement>document.getElementsByClassName('nav-list-block')[0]).style.display = "none";
      (<HTMLInputElement>document.getElementsByClassName('main-header')[0]).style.background = "none";
    }

  }

}
