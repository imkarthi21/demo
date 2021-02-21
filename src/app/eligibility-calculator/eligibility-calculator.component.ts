import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.css']
})
export class EligibilityCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ");
  }

  onSlide(val, field, progress) {

    (<HTMLInputElement>document.getElementsByClassName(field)[0]).textContent = this.numberWithCommas(val.target.value);

    var pp = val.target.value / 300000 * 100;
    (<HTMLInputElement>document.getElementsByClassName(progress)[0]).style.width = pp + "%";


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
}
