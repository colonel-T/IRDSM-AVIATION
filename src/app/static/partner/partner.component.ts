import { Component } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnersComponent {
  partners = [
    { name: 'CCAA', logo: '/assets/images/clients/1.png', url: 'https://ccaa.aero/' },
    { name: 'IATA Training', logo: '/assets/images/clients/2.png', url: 'https://www.iata.org/en/training/' },
    { name: 'Air Richelieu', logo: '/assets/images/clients/air-richelieu.png', url: 'https://www.airrichelieu.com' },
    { name: 'YUNUS ASSUR', logo: '/assets/images/clients/YUNUS.JPG', url: 'https://www.findglocal.com' },
    { name: 'Camair-Co', logo: '/assets/images/clients/camairco.JPG', url: 'https://www.camair-co.cm' },
    { name: 'SAMARA UNIVERSITY', logo: '/assets/images/clients/SAMARA.JPG', url: 'https://www.ssau.ru/' },
    { name: 'HORIZON ACADEMY', logo: '/assets/images/clients/HORIZON.JPG', url: 'https://horizons-academy.com/' },
    { name: 'AERO PYRENEES', logo: '/assets/images/clients/AERO.JPG', url: 'http://www.aeropyrenees.com/' },
    { name: 'ASECNA', logo: '/assets/images/clients/ASECNA.JPG', url: 'https://www.asecna.aero/' },
    { name: 'LOMONOSOV STATE UNIVERSITY', logo: '/assets/images/clients/LOMONOV.JPG', url: 'https://international.msu.ru/en' },
    { name: 'AIR FRANCE', logo: '/assets/images/clients/AIRFRANCE.JPG', url: 'https://wwws.airfrance.cm/' },
    { name: 'TURKISH AIRLINE', logo: '/assets/images/clients/TURKISH.JPG', url: 'https://www.turkishairlines.com/' },
    { name: 'EGYPT AIR', logo: '/assets/images/clients/EGYPT.JPG', url: 'https://www.egyptair.com/en' },
    { name: 'OACI', logo: '/assets/images/clients/OACI.JPG', url: 'https://www.icao.int/fr' },
    { name: 'KeEPA', logo: '/assets/images/clients/KEEPA.JPG', url: '' },
    { name: '', logo: '/assets/images/clients/', url: '' }
  ];
}
