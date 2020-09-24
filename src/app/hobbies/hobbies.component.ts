import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Hobbies - Michał Czyż");
  }

  ngOnInit(): void {
    AOS.init();
    document.documentElement.style.setProperty('--background', '#2451bb');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--nav-background', '#002a8a');
    document.documentElement.style.setProperty('--hello-background', '#002a8a');
  }

  goto(e) {
    window.location.href = e;
  }

}
