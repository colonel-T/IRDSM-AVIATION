import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Events } from 'src/app/models/events';
import { ProgramsService } from 'src/app/services/programs.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  isLoadingForm: boolean = true;

  events: Events[];

  eventsSuscription: Subscription | undefined

  selectedEvents: any = undefined

  listEvents: any[] | undefined

  dateEvent: any[] | undefined;

  nEtude: any[] | undefined;

  eventConfirmation: boolean = false

  eventForm!: FormGroup;

  private baseUrl = GlobalConstants.apiURL;

  programsSubscription: Subscription | undefined;

  constructor(
    private title: Title,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private programService: ProgramsService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {

    this.title.setTitle("IRDSM AVIATION - Inscription Évènement En Ligne");

    this.storeEvents();

    console.log(this.events)

    this.storeDateEvent();

    this.storeNEtudeEvent();

    this.addEventForm();

    this.loadScript('../assets/js/jquery.js');

    this.loadScript('../assets/js/plugins.js');

    this.loadScript('../assets/js/functions.js');

    this.loadScript('../assets/js/form.js');

    this.loadScript('https://code.iconify.design/1/1.0.7/iconify.min.js');
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.isLoadingForm = false;
      console.log(this.isLoadingForm)
    }, 2000);
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

  clickConfirmationForm() {

    if (!$('input[name="cF"]').is(':checked')) {

      this.eventForm.controls['cF'].setValue(true)

      $('input[name="cF"]').prop('checked', true);

    } else {

      this.eventForm.controls['cF'].setValue(false)

      $('input[name="cF"]').prop('checked', false);

    }
  }

  storeEvents() {
    this.events = this.programService.events;
  }

  storeDateEvent() {
    this.dateEvent = this.programService.dateEvents;
    this.selectedEvents = this.dateEvent[0].name
  }

  storeNEtudeEvent() {
    this.nEtude = this.programService.nEtduteEvent;
  }

  addEventForm() {
    this.eventForm = this.formBuilder.group({
      events: ['Ateliers Pratiques Vacances', Validators.required],
      dateEvents: ["Évènement du 01 au 31 Août 2024", Validators.required],

      fname: ['', Validators.required],
      phone: ['', Validators.required],
      ville: ['', Validators.required],
      sexe: ['F', Validators.required],

      age: ['', Validators.required],
      etude: ['Primaire', Validators.required],
      center: ['Yaoundé - Mballa 2', Validators.required],
      cF: ['', Validators.required],
    });

  }

  submitEvent() {
    $('.body-inner').hide();
    $('#loading').css('visibility', 'visible');


    let dateCreation = new Date()

    let responseForm = this.eventForm.value

    responseForm['dateCreation'] = dateCreation

    console.log(responseForm)

    this.http
      .post<any[]>(`${this.baseUrl}/submission/add-event`, responseForm)
      .subscribe(
        (response) => {

          $('#loading').css('visibility', 'hidden');
          $('.body-inner').show();
          $('.admission_success').show();
          this.eventForm.reset();

          this.eventConfirmation = !this.eventConfirmation

          setTimeout(function () {

            $('.admission_success').hide();

          }, 5000);


        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );


  }

}
