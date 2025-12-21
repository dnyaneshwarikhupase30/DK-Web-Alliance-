import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
  projects = [
    {
      title: "Sterexa Biopharma",
      desc: "A comprehensive company profile website showcasing services, team, and achievements. Fully responsive with modern animations and interactive sections.",
      tech: "Angular • HTML • CSS • Typescript",
      link: "https://company-website-d35cc.web.app",
      img: "assets/portfolio/company-site.jpeg"
    },
    {
      title: "Sterexa Biopharm LLP",
      desc: "Corporate website for Sterexa Biopharm LLP featuring products, services, and contact information. Mobile-first responsive design and smooth user experience.",
      tech: "Angular • HTML • SCSS • Typescript",
      link: "https://sterexa-website.vercel.app/",
      img: "assets/portfolio/sterexa-site.jpeg"
    },
    {
      title: "DK Web Alliance",
      desc: "Professional business website for DK Web Alliance highlighting services, portfolio, and contact options. Clean modern UI/UX with interactive elements and gradient backgrounds.",
      tech: "Angular • HTML • CSS • Typescript",
      link: "https://dk-web-alliance.vercel.app/",
      img: "assets/portfolio/dk-web-alliance.png"
    }
  ];

  ngAfterViewInit() {
    this.addScrollAnimation();
  }

  addScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in, .project-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
}
