import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule, TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  activeLang: string = 'EN';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  translateText(lang: string) {
    this.activeLang = lang.toUpperCase();
    this.translate.use(lang);
  }
  
    hoveredButtonIndex: number | null = null; 
  
    startAnimation(index: number) {
      this.hoveredButtonIndex = index;
    }
  
    stopAnimation() {
      this.hoveredButtonIndex = null;
    }

}
