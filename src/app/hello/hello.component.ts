import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Michał Czyż");
  }

  ngOnInit(): void {
    AOS.init({ disable: 'mobile' });
    document.documentElement.style.setProperty('--background', '#0a0a0a');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--nav-background', ' #000000');
    document.documentElement.style.setProperty('--hello-background', '#000000');
  }

  moai() {
    var audio = new Audio('assets/wololo.mp3');
    audio.play();

    var name = document.querySelector(".name");
    name.innerHTML = "<a href='https://🗿🗿🗿🗿🗿.tk' class='name-url'>I'm Mike</a>";
    var link = document.querySelector(".name-url") as HTMLLinkElement;
    link.style.textDecoration = "none";
    link.style.cursor = "default";
    link.style.color = "white";

    document.documentElement.style.setProperty('--background', '#3B4252');
    document.documentElement.style.setProperty('--color', '#ECEFF4');
    document.documentElement.style.setProperty('--nav-background', ' #2E3440');
    document.documentElement.style.setProperty('--hello-background', '#2E3440');

    document.querySelector(".copyright").innerHTML = "🗿."
  }
}
