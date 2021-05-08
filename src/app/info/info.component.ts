import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("About Me - Michał Czyż");
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    document.documentElement.style.setProperty('--background', '#0a0a0a');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--nav-background', ' #000000');
    document.documentElement.style.setProperty('--hello-background', '#000000');
  }

}
