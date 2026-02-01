import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  year = new Date().getFullYear();
  appname = 'IRDSM Aviation';

  locations = [
    {
      city: 'Douala',
      address: `Feu rouge Bessengue
Immeuble Azziculé
3ᵉ étage, porte à droite
Zone aéronautique`,
      mapLink: 'https://www.google.com/maps/search/Feu+rouge+Bessengue+Immeuble+Azziculé'
    },
    {
      city: 'Yaoundé',
      address: `Mballa 2
Carrefour Jamot
Route de l’Hôpital Jamot`,
      mapLink: 'https://www.google.com/maps/search/Carrefour+Jamot+Yaoundé'
    }
  ];

  phone1 = '+237 692 363 775';
  phone2 = '+237 673 528 427';
  email = 'irdsmaviation1@gmail.com';

  socialLinks = [
    {
      name: 'Facebook',
      icon: 'fab fa-facebook-f',
      url: 'https://www.facebook.com/irdsmaviation'
    },
    {
      name: 'Instagram',
      icon: 'fab fa-instagram',
      url: 'https://www.instagram.com/irdsmaviation'
    },
    {
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      url: 'https://www.tiktok.com/@irdsmaviation'
    }
  ];
}
