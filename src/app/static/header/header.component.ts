import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLang: 'fr' | 'en' = 'en';
  isMenuOpen = false; // tracks mobile menu open/close

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') as 'fr' | 'en' | null;
    this.currentLang = savedLang || 'en';
    this.translate.setDefaultLang(this.currentLang);
    this.translate.use(this.currentLang);
  }

  // Language switcher
  changeLang(lang: 'fr' | 'en') {
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
  }

  // Mobile menu toggle
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
