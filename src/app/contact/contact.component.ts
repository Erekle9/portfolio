import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, TranslateModule, CommonModule, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  http = inject(HttpClient);
  
  contactData = {
    name: '',
    email: '',
    message: ''
  };

  mailTest = false;

  post = {
    endPoint: 'https://erekletoedten.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'application/json',
        "responseType": 'text',
      },
    },
  };
  

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.isCheckboxChecked = false; 
            this.isMessageSent = true; // Erfolgsmeldung anzeigen
            setTimeout(() => {
              this.isMessageSent = false; // Meldung nach 5 Sekunden ausblenden
            }, 5000);
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid) {

      ngForm.resetForm();
    }
  }

  isCheckboxChecked = false;
  isMessageSent = false;

  toggleCheckbox(isChecked: boolean) {
    this.isCheckboxChecked = isChecked;
  }
}
