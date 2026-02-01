import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Formation {
  img: string;
  title: string;
  desc: string;
  duree: string;
  parcoursLink?: string;
  admissionLink: string;
  showParcoursBtn?: boolean;
}

@Component({
  selector: 'app-formations',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations: Formation[] = [];

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("IRDSM AVIATION - Formations");

    // Définir toutes les formations dynamiquement
    this.formations = [
      { img: 'assets/images/formations/bg.jpg', title: 'formation.atpl', desc: 'formation.atpl_desc', duree: '12 mois', parcoursLink: '/program-pilote', admissionLink: '/admission', showParcoursBtn: true },
      { img: 'assets/images/formations/ate.jpeg', title: 'formation.ato', desc: 'formation.ato_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/MD.png', title: 'formation.md', desc: 'formation.md_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/ha.jpeg', title: 'formation.ha', desc: 'formation.ha_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/fret.jpg', title: 'formation.frêt', desc: 'formation.frêt_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/aie.jpg', title: 'formation.aie', desc: 'formation.aie_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/cc.jpg', title: 'formation.cc', desc: 'formation.cc_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/sc.jpg', title: 'formation.sc', desc: 'formation.sc_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/ata.jpg', title: 'formation.ata', desc: 'formation.ata_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/pv.jpg', title: 'formation.pv', desc: 'formation.pv_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/bg.jpg', title: 'formation.ae', desc: 'formation.ae_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/apa.jpg', title: 'formation.apa', desc: 'formation.apa_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/mta.jpg', title: 'formation.mta', desc: 'formation.mta_desc', duree: '12 mois', admissionLink: '/admission' },
      { img: 'assets/images/formations/aea.jpeg', title: 'formation.aea', desc: 'formation.aea_desc', duree: '12 mois', admissionLink: '/admission' }
    ];

    // Scripts externes
    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');
    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');
  }

  private loadScript(url: string) {
    const body = document.body;
    const script = document.createElement('script');
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
