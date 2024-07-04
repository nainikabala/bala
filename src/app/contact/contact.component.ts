import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private http: HttpClient) {}


  onSubmit(form: NgForm) {
    if (form.valid) {
      this.http.post('http://localhost:4200/send-email', form.value).subscribe(response => {
        console.log('Email sent successfully!', response);
      }, error => {
        console.error('Error sending email', error);
      });
    }
  }

  alerted() {
    return alert("Form submitted successfully")
}


}
