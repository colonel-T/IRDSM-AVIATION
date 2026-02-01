import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import * as jquery from 'jquery';

declare var AOS: any; // Pour les animations au scroll

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  constructor(
    private title: Title,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    // Titre de la page
    this.title.setTitle("IRDSM AVIATION - Contact");

    // Chargement des scripts nécessaires
    this.loadScript('../assets/plugins/gmap3/gmap.min.js');
    this.loadScript('../assets/plugins/gmap3/map-styles.js');
    this.loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBByIEHoI3npofmaqJpkZUNqSUp_ermqmQ');

    this.loadScript('../assets/js/jquery.js');
    this.loadScript('../assets/js/plugins.js');
    this.loadScript('../assets/js/functions.js');

    // Calendly Widget
    this.loadScript('https://assets.calendly.com/assets/external/widget.js');
  }

  ngAfterViewInit(): void {
    // Initialisation AOS (animations au scroll)
    AOS.init({
      once: true,
      duration: 1000
    });
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

  onSubmit(form: NgForm) {
    const message = {
      name: form.value['name'],
      email: form.value['email'],
      subject: form.value['subject'],
      message: form.value['message']
    };

    this.httpClient
      .post('http://localhost:8080/send_email', message)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
          alert('Message envoyé avec succès !');
          form.reset();
        },
        (error) => {
          console.error('Erreur ! : ' + error);
          alert('Erreur lors de l’envoi du message.');
        }
      );
  }

}
