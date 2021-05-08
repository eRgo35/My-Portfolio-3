import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Page Not Found - Michał Czyż");
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    document.documentElement.style.setProperty('--background', '#000000');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--nav-background', ' #000000');
    document.documentElement.style.setProperty('--hello-background', '#000000');
  }
}
