import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  slides = [
    { image: 'assets/hero1.jpg', title: 'We Help You Build Your Online Presence', subtitle: 'Professional websites designed with modern UI/UX.', button: 'Get Started' },
    { image: 'assets/hero2.jpg', title: 'Grow Your Business with Modern Digital Solutions', subtitle: 'We create scalable software with latest technologies.', button: 'Explore Services' },
    { image: 'assets/hero3.jpg', title: 'Your Vision, Our Development', subtitle: 'Custom applications built exactly for your needs.', button: 'Contact Us' }
  ];

  currentImage = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentImage = (this.currentImage + 1) % this.slides.length;
    }, 4000);
  }

  ngAfterViewInit() {
    this.addScrollAnimation();
  }

  addScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

  goToSection(id: string) {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
