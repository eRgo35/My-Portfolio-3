import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public location: Location) { }

  currentPage = this.location.path().substr(1);

  ngOnInit(): void {
    if (this.currentPage == "") {
      this.currentPage = "hello";
    }
    else if (this.currentPage == "info") {
      this.currentPage = this.location.path().substr(1);
    }
    else if (this.currentPage == "projects") {
      this.currentPage = this.location.path().substr(1);
    }
    else if (this.currentPage == "hobbies") {
      this.currentPage = this.location.path().substr(1);
    }
    else {
      this.currentPage = "";
    }
  }

  menuOpen() {
    document.getElementById("menu-bg-sm").style.opacity = "1";
    document.getElementById("menu-bg-sm").style.visibility = "visible";
  }

  menuClose(e) {
    document.getElementById("menu-bg-sm").style.opacity = "0";
    document.getElementById("menu-bg-sm").style.visibility = "hidden";
    this.currentPage = e;
  }

  menuCloseM() {
    document.getElementById("menu-bg-sm").style.opacity = "0";
    document.getElementById("menu-bg-sm").style.visibility = "hidden";
  }

}
