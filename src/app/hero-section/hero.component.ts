import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  activeLang = 'EN';
  hoveredButtonIndex: number | null = null;

  @ViewChild('marqueeContent', { static: false }) marqueeContent!: ElementRef;

  constructor(private translate: TranslateService, private renderer: Renderer2) {
    // Set default language
    this.translate.setDefaultLang('en');
    this.translate.use(this.activeLang.toLowerCase());
  }

  ngAfterViewInit(): void {
    this.initMarquee();
  }

  initMarquee() {
    if (!this.marqueeContent) return;

    const root = document.documentElement;
    const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"), 10);

    this.renderer.setStyle(root, '--marquee-elements', this.marqueeContent.nativeElement.children.length);

    for (let i = 0; i < marqueeElementsDisplayed; i++) {
      const child = this.marqueeContent.nativeElement.children[i].cloneNode(true);
      this.renderer.appendChild(this.marqueeContent.nativeElement, child);
    }
  }

  // Language switcher
  switchLang(lang: string) {
    this.activeLang = lang;
    this.translate.use(lang.toLowerCase());
  }

  // Hover effect functions for the buttons
  startAnimation(index: number) {
    this.hoveredButtonIndex = index;
  }

  stopAnimation() {
    this.hoveredButtonIndex = null;
  }
}
