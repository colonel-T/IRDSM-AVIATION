import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../common/global-constants'; // ajuste le chemin si besoin

@Injectable({
  providedIn: 'root'
})
export class AdmissionService {

  private baseUrl = GlobalConstants.apiURL; // ex: https://tonbackend.onrender.com

  constructor(private http: HttpClient) {}

  /**
   * Envoie le formulaire d'admission au backend
   * Endpoint backend : /api/admission/submit
   */
  addAdmission(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/admission/submit`, payload);
  }
}
