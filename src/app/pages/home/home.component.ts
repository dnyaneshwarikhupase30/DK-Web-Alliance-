import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = [
    'assets/hero1.jpg',
    'assets/hero2.jpg',
    'assets/hero3.jpg'
  ];

  currentImage = 0;

slides = [
  {
    image: 'assets/hero1.jpg',
    title: 'We Help You Build Your Online Presence',
    subtitle: 'Professional websites designed with modern UI/UX.',
    button: 'Get Started'
  },
  {
    image: 'assets/hero2.jpg',
    title: 'Grow Your Business with Modern Digital Solutions',
    subtitle: 'We create scalable software with latest technologies.',
    button: 'Explore Services'
  },
  {
    image: 'assets/hero3.jpg',
    title: 'Your Vision, Our Development',
    subtitle: 'Custom applications built exactly for your needs.',
    button: 'Contact Us'
  }
];

ngOnInit() {
  setInterval(() => {
    this.currentImage = (this.currentImage + 1) % this.slides.length;
  }, 4000);
}
}
