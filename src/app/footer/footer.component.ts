import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  openWindow(link: string): void {
    let url = '';
    switch (link) {
      case 'impressum':
        url = 'https://yourwebsite.com/impressum';
        break;
      case 'datenschutz':
        url = 'https://yourwebsite.com/datenschutz';
        break;
      case 'github':
        url = 'https://github.com/yourusername';
        break;
      case 'linkedin':
        url = 'https://linkedin.com/in/yourprofile';
        break;
      default:
        break;
    }
    if (url) {
      window.open(url, '_blank');
    }
  }
}
