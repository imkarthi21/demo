import { Component, OnInit ,HostListener} from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

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
  changeDropSelect(val) {


    if (val == '') {
      var dataId = (<HTMLInputElement>document.getElementsByClassName('dropdown-select')[0]).getAttribute('data-id');
      if (dataId == '0') {
        (<HTMLInputElement>document.getElementsByClassName('dropdown-list')[0]).style.display = "block";
        (<HTMLInputElement>document.getElementsByClassName('dropdown-select')[0]).setAttribute('data-id', '1');
      }
      else {
        (<HTMLInputElement>document.getElementsByClassName('dropdown-list')[0]).style.display = "none";
        (<HTMLInputElement>document.getElementsByClassName('dropdown-select')[0]).setAttribute('data-id', '0');
      }

    }
    else {
      document.getElementsByClassName('tenure')[0].textContent = val;
      (<HTMLInputElement>document.getElementsByClassName('dropdown-list')[0]).style.display = "none";
      (<HTMLInputElement>document.getElementsByClassName('dropdown-select')[0]).setAttribute('data-id', '0');
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

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
    }

  onSlide(val, field, progress) {

    (<HTMLInputElement>document.getElementsByClassName(field)[0]).textContent = this.numberWithCommas(val.target.value);

    var pp = val.target.value / 300000 * 100;
    (<HTMLInputElement>document.getElementsByClassName(progress)[0]).style.width = pp + "%";


  }

}
