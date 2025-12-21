import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

 services = [
  { 
    icon:'💻', 
    title:'Website Development', 
    description:'Modern, responsive & secure business websites with fast loading speed and mobile-first UI. Custom features based on your needs.' 
  },

  { 
    icon:'⚙️', 
    title:'Web Apps', 
    description:'Full-stack dashboards, CRM/admin panels, management systems & SaaS platforms with user roles, auth & databases.' 
  },

  { 
    icon:'🤖', 
    title:'Chatbots', 
    description:'Custom AI chatbot development, FAQ automation, lead capturing, integration with websites, WhatsApp & backend APIs.' 
  },

  { 
    icon:'🎨', 
    title:'UI/UX Design', 
    description:'Clean, modern & intuitive interfaces with consistent layouts, animations & improved user flow for better engagement.' 
  },

  { 
    icon:'🚀', 
    title:'SEO Boost', 
    description:'On-page optimization, speed improvements, keyword planning, backlinks & ranking strategies for long-term organic growth.' 
  },

  { 
    icon:'🛠', 
    title:'Maintenance', 
    description:'End-to-end website support, bug fixing, migration, security patches & performance tuning to keep systems running smoothly.' 
  }
];


  ngAfterViewInit(){
    this.animateReveal();
  }

  animateReveal(){
    const reveals = document.querySelectorAll('.reveal');

    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('active');
          obs.unobserve(e.target);
        }
      })
    },{threshold:.15});

    reveals.forEach(el=> obs.observe(el));
  }

}
