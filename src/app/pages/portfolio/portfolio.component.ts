import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = [
    {
      title: "Sterexa Biopharma",
      desc: "Live project showcasing company profile & services.",
      tech: "Angular • HTML • CSS   ",
      link: "https://company-website-d35cc.web.app",
      img: "assets/portfolio/company-site.jpeg"
    },
    {
      title: "Sterexa Biopharm LLP",
      desc: "Responsive corporate product & services website.",
      tech: "Angular • HTML • CSS   ",
      link: "https://sterexa-website.vercel.app/",
      img: "assets/portfolio/sterexa-site.jpeg"
    }
  ];
}



