import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {


  programsSubject = new Subject<any[]>();

  eventsSubject = new Subject<any[]>();

  dateEventsSubject = new Subject<any[]>();

  dateCompSubject = new Subject<any[]>();

  nEtudeSubject = new Subject<any[]>();


  constructor() { }


  events = [
    {
      name: "Ateliers Pratiques Vacances",
      duration: 1
    }
  ]

  dateEvents = [
    {
      code: "200724",
      name: "Événement prévu du 5 au 30 janvier 2026",
    },
    {
      code: "200725",
      name: "Événement prévu du 01 au 28 Février 2026",
    },
    {
      code: "200726",
      name: "Événement prévu du 01 au 28 Mars 2026",
    },
        {
      code: "200727",
      name: "Événement prévu du 01 au 25 Avril 2026",
    },
    {
      code: "200728",
      name: "Événement prévu du 01 au 30 Mai 2026",
    },
    {
      code: "200729",
      name: "Événement prévu du 01 au 27 Juin 2026",
    },
        {
      code: "200730",
      name: "Événement prévu du 01 au 25 Juillet 2026",
    },
    {
      code: "200731",
      name: "Événement prévu du 01 au 29 Août 2026",
    },
    {
      code: "200732",
      name: "Événement prévu du 01 au 26 Septembre 2026",
    },
        {
      code: "200733",
      name: "Événement prévu du 01 au 31 Octobre 2026",
    },
    {
      code: "200734",
      name: "Événement prévu du 01 au 28 Novembre 2026",
    },
    {
      code: "200735",
      name: "Événement prévu du 01 au 29 Décembre 2026",
    }
  ];

  programs = [
    {
      name: "Pilote d'Avion",
      duration: "12"
    },
    {
      name: "Hôtesse de l’air / Stewards (PNC)",
      duration: "12"
    },
    {
      name: "Agent Technique d’Exploitation (ATE)",
      duration: "12"
    },
    {
      name: "Maintenance Aéronautique",
      duration: "12"
    },
    {
      name: "Systèmes Aéronautiques",
      duration: "12"
    },
    {
      name: "Informatique Industrielle / Intelligence Artificielle",
      duration: "12"
    },
    {
      name: "Ingénierie Aéronautique",
      duration: "12"
    }, {
      name: "Gestion Des Opérations Aériennes",
      duration: "12"
    },
    {
      name: "Opérateur Piste / Guide Aire Manoeuvre",
      duration: "12"
    },
    {
      name: "Passage Sol : - Controle chargement  - Supervision chargement",
      duration: "12"
    },
    {
      name: "Fret & Poste Aérien",
      duration: "12"
    },
    {
      name: "Transitaire-Gestionnaire Fret Intermodal",
      duration: "12"
    },
    {
      name: "Agent Passage Vente Billetterie Aérienne",
      duration: "12"
    },
    {
      name: "Entreprenariat Vente Billetterie Aérienne",
      duration: "12"
    },
    {
      name: "Hôtesse Accueil & Assistance Aéroportuaire",
      duration: "12"
    },
    {
      name: "Banque Finance & Gestion Business Aéronautique",
      duration: "12"
    },
    {
      name: "Entreprenariat Startup Aéronautique",
      duration: "12"
    },
    {
      name: "Marketing Aeronautique",
      duration: "12"
    },
    {
      name: "Comptabilité Matières & Gestion des Approvisionnements",
      duration: "12"
    },
    {
      name: "Douane Transit Intermodal",
      duration: "12"
    },
    {
      name: "Marchandises Dangereuses (DGR)",
      duration: "12"
    }
  ];


dateComp = [
    {
      code: "200724",
      name: "24 Janvier 2026",
    },
    {
      code: "200725",
      name: "28 Février 2026",
    },
    {
      code: "200726",
      name: "28 Mars 2026",
    },
        {
      code: "200727",
      name: "25 Avril 2026",
    },
    {
      code: "200728",
      name: "30 Mai 2026",
    },
    {
      code: "200729",
      name: "27 Juin 2026",
    },
        {
      code: "200730",
      name: "25 Juillet 2026",
    },
    {
      code: "200731",
      name: "29 Août 2026",
    },
    {
      code: "200732",
      name: "26 Septembre 2026",
    },
        {
      code: "200733",
      name: "31 Octobre 2026",
    },
    {
      code: "200734",
      name: "28 Novembre 2026",
    },
    {
      code: "200735",
      name: "29 Décembre 2026",
    }
];


  listConcours = [
    {
      code: "200724",
      name: "24 Janvier 2026",
    },
    {
      code: "200725",
      name: "28 Février 2026",
    },
    {
      code: "200726",
      name: "28 Mars 2026",
    },
        {
      code: "200727",
      name: "25 Avril 2026",
    },
    {
      code: "200728",
      name: "30 Mai 2026",
    },
    {
      code: "200729",
      name: "27 Juin 2026",
    },
        {
      code: "200730",
      name: "25 Juillet 2026",
    },
    {
      code: "200731",
      name: "29 Août 2026",
    },
    {
      code: "200732",
      name: "26 Septembre 2026",
    },
        {
      code: "200733",
      name: "31 Octobre 2026",
    },
    {
      code: "200734",
      name: "28 Novembre 2026",
    },
    {
      code: "200735",
      name: "29 Décembre 2026",
    }
  ];

  nEtduteEvent = [
    {
      code: "Primaire",
      name: "Primaire",
    },
    {
      code: "Secondaire1",
      name: "Secondaire - 1er Cycle",
    }, {
      code: "Secondaire2",
      name: "Secondaire - 2e Cycle",
    }

  ];

  nEtude = [
    {
      code: "M",
      name: "Master ou Equivalent",
    },
    {
      code: "L",
      name: "Licence ou Equivalent",
    },
    {
      code: "BTS",
      name: "Brévet de Technicien Supérieur ou Equivalent",
    },
    {
      code: "BAC",
      name: "Baccalauréat ou Equivalent",
    },
    {
      code: "PROB",
      name: "Probatoire ou Equivalent",
    },
    {
      code: "BEPC",
      name: "BEPC ou Equivalent",
    }
  ];

  emitProgramsSubject() {
    this.programsSubject.next(this.programs.slice());
  }

  emitDateSubject() {
    this.dateCompSubject.next(this.dateComp.slice());
  }

  emitnEtudeSubject() {
    this.nEtudeSubject.next(this.nEtude.slice());
  }

  emitEventsSubject() {
    this.eventsSubject.next(this.events.slice());
  }

  emitDateEventsSubject() {
    this.dateEventsSubject.next(this.dateEvents.slice());
  }

  // ...existing code...

  // Add this method to provide date competitions
  getDateCompetitions() {
    return this.dateComp.slice();
  }
// ...existing code...

}
