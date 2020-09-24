import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Projects - Michał Czyż");
  }

  ngOnInit(): void {
    AOS.init();
    document.documentElement.style.setProperty('--background', '#f0f0f0');
    document.documentElement.style.setProperty('--color', '#000000');
    document.documentElement.style.setProperty('--nav-background', '#ffffff');
    document.documentElement.style.setProperty('--hello-background', '#ffffff');
  }

  goto(e) {
    window.location.href = e;
  }

}
