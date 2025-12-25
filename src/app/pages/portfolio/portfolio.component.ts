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
  title: "Dnyaneshwari Ladies Tailors",
  desc: "Homegrown ladies tailoring business offering blouse stitching, Pico-Fall, and alteration services. Mobile-first responsive design with smooth user experience and visually appealing animated gradient backgrounds.",
  tech: "Angular • HTML • CSS • Typescript",
  link: "https://dnyaneshwari-ladies-tailors-891n.vercel.app/",
  img: "assets/portfolio/dnyaneshwari-ladies-tailors.png"
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
