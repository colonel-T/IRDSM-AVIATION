import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface NewsItem {
  title: string;
  category: string;
  date: string;
  description: string;
  image?: string;
  video?: string;
}

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {

  documentaires: NewsItem[] = [];
  concours: NewsItem[] = [];

  selectedItem: NewsItem | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Documentaires école
    this.documentaires = [
      {
        title: "Bonne Année 2026",
        category: "New Year 2026",
        date: "01 Janvier 2025",
        description: "« En route vers de nouveaux horizons »L’aviation, notre passion — l’avenir, notre destination »« Décollons ensemble vers 2026",
        image: "../../../assets/images/news/Bonne Annee 2026.png"
      },
      {
        title: "Réunion Collège Air Richelieu",
        category: "Réunion",
        date: "19 June 2021",
        description: "Négociations d'un partenariat entre le Collège Air Richelieu et IRDSM AVIATION.\n- DEC Techniques de pilotage\n- AEC Pilote de ligne\n- Séjour au Canada\n- Conditions d'admission\n- etc...",
        image: "../../../assets/images/news/air_richelieu_conf.jpg"
      },
      {
        title: "Sécurité des vols",
        category: "Vidéo",
        date: "14 Avril 2021",
        description: "- Sécurité des vols, \n- agir ensemble au sol.\n - Sécurité des vols, \n - agir ensemble au sol \n- Respect de la hauteur de chargement en soute vrac \n Droit Auteur : Page Ministère de la Transition écologique France</p>",
        video: "https://www.youtube.com/embed/Rvn1L4yemuE"
      },
      {
        title: "Salle S002",
        category: "Présentation",
        date: "17 Avril 2021",
        description: "Salle bien espacée, climatisée.\nProchain concours",
        image: "../../../assets/images/news/IMG_7258.jpg"
      },
      {
        title: "Un peu de culture aéronautique",
        category: "Vidéo",
        date: "05 Avril 2021",
        description: "<p>Quelques Astuces Pour Préparer Notre Concours.<br>Episode 1 : Comment un avion vole-t-il?<br>Droit Auteur : Page Youtube Uniscie",
        video: "https://www.youtube.com/embed/nlfEAoaih1E"
      },
      {
        title: "Agrément ",
        category: "Agrément",
        date: "09 Fevrier 2021",
        description: "Renouvellement de notre agrément attribué par L'Autorité aéronautique du Cameroun. <Br>www.kabin.eu",
        image: "../../../assets/images/news/IMG_7256.jpg"
      },
      {
        title: "Séance administrative",
        category: "Orientation",
        date: "03 Mars 2021",
        description: "Séance administrative avec les parents et remise des lettres d'admission aux candidats retenus pour la session d'examen d'entrée de janvier\n                                        L’échec n’est qu’une opportunité pour recommencer la même chose plus intelligemment.",
        image: "../../../assets/images/news/148547172_118476636854833_7194572172138744271_n.jpeg"
      },
      {
        title: "Certificat d'accréditation IATA",
        category: "Certificat",
        date: "04 Janvier 2021",
        description: "Obtention de notre #certificat accréditation #IATA",
        image: "../../../assets/images/news/IMG_7257.jpg"
      },
      {
        title: "Politique Qualité",
        category: "Politique",
        date: "07 Novembre 2020",
        description: "Notre Politique de Qualité.",
        image: "../../../assets/images/news/172160534_486985115997613_4841312134860286604_n.jpeg"
      }
    ];

    // Concours lancer
    this.concours = [
      {
      title: "Concours Fevrier 2026",
      category: "Concours",
      date: "18 Fev 2026",
      description: "“Rendez-vous en janvier 2026 pour le grand concours ! Janvier 2026 — Talents. Excellence. Inspiration. Le concours arrive en janvier 2026 — Soyez prêts !",
      image: "../../../assets/images/news/Fevrier 2026.JPG"
      },
      {
      title: "Concours Janvier 2026",
      category: "Concours",
      date: "01 Janvier 2026",
      description: "Spécial Rentrée 2026",
      image: "../../../assets/images/news/Janvier 2026.JPG"
      },
      {
      title: "Concours ATE - 17 avril",
      category: "Concours",
      date: "24 Mars 2021",
      description: `<p>Spécial Concours Agents Techniques D'Exploitation<br>Lien : https://forms.gle/7c7B9tHC8eEdpMT88 <br></p>`,
      image: "../../../assets/images/news/ATE_Yde.jpg"
      },
      {
        title: "Concours MD - 17 avril",
        category: "Concours",
        date: "24 Mars 2021",
        description: "Concours Marchandises Dangereuses Aéronautique.\nLien : https://forms.gle/LZoP5UN6wswbAUV66",
        image: "../../../assets/images/news/MD_Yde.jpg"
      },
      {
        title: "Session d'orientation",
        category: "Orientation",
        date: "10 Mars 2021",
        description: "Session d'orientation avec les candidats retenus.",
        image: "../../../assets/images/news/160100599_135366108499219_1828460204046950576_n.jpeg"
      },
            {
        title: "Concours de Aviation 23 Fevrier 2021",
        category: "Concours",
        date: "23 Fevrier 2021",
        description: "Vous ne trouverez jamais ce que vous ne cherchez pas. \n Participez au concours de Aviation et tentez de gagner des prix incroyables !",
        image: "../../../assets/images/news/143114619_114455850590245_1474220001282927273_n.jpeg"
      }
    ];
  }

  formatDescription(desc: string): string {
    return desc ? desc.replace(/\n/g, '<br>') : '';
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  scrollLeft(deck: HTMLElement) {
    deck.scrollBy({ left: -320, behavior: 'smooth' });
  }

  scrollRight(deck: HTMLElement) {
    deck.scrollBy({ left: 320, behavior: 'smooth' });
  }

  openModal(item: NewsItem) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }

}
