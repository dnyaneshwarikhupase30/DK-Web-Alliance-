import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;

  onSubmit() {
    // Mock backend simulation
    this.submitted = true;

    // Reset form after 3 seconds (optional)
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }
}
