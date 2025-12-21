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
      const next = (this.currentImage + 1) % this.slides.length;
      this.fadeSlide(next);
    }, 4500);
  }

  fadeSlide(nextIndex: number) {
    const slider = document.querySelector('.hero-bg') as HTMLElement;
    slider.classList.add('fade-out');

    setTimeout(() => {
      this.currentImage = nextIndex;
      slider.classList.remove('fade-out');
    }, 400);
  }

  ngAfterViewInit() {
    this.animateScrollSections();
  }

  animateScrollSections() {
    const observedElements = document.querySelectorAll('.fade-in, .service-box, .portfolio-item');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    observedElements.forEach(el => observer.observe(el));
  }

  goToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
