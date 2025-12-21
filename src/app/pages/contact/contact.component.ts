import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  showPopup = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    if(this.formData.name && this.formData.email && this.formData.message){
      this.showPopup = true;

      setTimeout(() => this.showPopup = false, 2500);

      console.log("Email form submitted:", this.formData);

      this.formData = { name: '', email: '', phone: '', message: '' };
    }
  }

  sendWhatsApp() {
    const phone = "919359518058";
    const text = `Hello, I am ${this.formData.name}.\nEmail: ${this.formData.email}\nPhone: ${this.formData.phone}\nMessage: ${this.formData.message}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  }

}
