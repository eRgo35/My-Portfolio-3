import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-hobbies',
  templateUrl: '../gallery/gallery.component.html',
  styleUrls: ['../gallery/gallery.component.scss']
})
export class HobbiesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle("Hobbies - Michał Czyż");
  }

  items = [
    {
      description: 'Google Earth Studio Videos',
      imgPath: '../../assets/google-earth.webp',
      href: 'https://www.youtube.com/playlist?list=PLgm7_rin1dVzcviyHPVFLvvuzX2dogIPV'
    },
    {
      description: 'Portal Speedruns Videos',
      imgPath: '../../assets/portal.webp',
      href: 'https://www.youtube.com/playlist?list=PLgm7_rin1dVwmGrP2i2eXddbrT1H4lwAo'
    },
    {
      description: 'Card Magic',
      imgPath: '../../assets/magic.webp',
      href: 'https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ'
    },
    {
      description: 'Speedcubing',
      imgPath: '../../assets/rubiks-cube.webp',
      href: 'https://www.youtube.com/channel/UCiEQ8ZDBKqxdOTt1DVnoyQQ'
    },
  ]

  ngOnInit(): void {
    AOS.init();
    document.documentElement.style.setProperty('--background', '#2451bb');
    document.documentElement.style.setProperty('--color', '#ffffff');
    document.documentElement.style.setProperty('--nav-background', '#002a8a');
    document.documentElement.style.setProperty('--hello-background', '#002a8a');
  }

}
