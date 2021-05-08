import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: '../gallery/gallery.component.html',
  styleUrls: ['../gallery/gallery.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Projects - Michał Czyż");
  }

  items = [
    {
      description: 'Project TSI',
      imgPath: '../../assets/project-tsi.webp',
      href: 'https://tsi.mczyz.icu'
    },
    {
      description: 'JS Calculator',
      imgPath: '../../assets/js-calc.webp',
      href: 'https://js-calc.cf'
    },
    {
      description: 'Server Manager',
      imgPath: '../../assets/server-manager.webp',
      href: 'https://github.com/eRgo35/Server-Manager'
    },
    {
      description: 'Guess the Number',
      imgPath: '../../assets/numbers.webp',
      href: 'https://github.com/eRgo35/Guess-the-Number'
    },
  ]

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    document.documentElement.style.setProperty('--background', '#f0f0f0');
    document.documentElement.style.setProperty('--color', '#000000');
    document.documentElement.style.setProperty('--nav-background', '#ffffff');
    document.documentElement.style.setProperty('--hello-background', '#ffffff');
  }

}
