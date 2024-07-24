import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Events } from 'src/app/models/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(protected http: HttpClient) { }

  event: Events[] = [];
  eventSubject = new Subject<Events[]>();

  emitCompetition() {
    this.eventSubject.next(this.event);
  }

  async getList() {

    this.http
      .get<any[]>(`${GlobalConstants.apiURL}/event/list`)
      .subscribe(
        (response) => {
          this.event = response;
          this.emitCompetition();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

  }
}
