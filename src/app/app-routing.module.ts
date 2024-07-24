import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { ServicesComponent } from './pages/services/services.component';
import { AdmissionPolytechniqueComponent } from './pages/polytechnique/admission-polytechnique/admission-polytechnique.component';
import { FormationPolytechniqueComponent } from './pages/polytechnique/formation-polytechnique/formation-polytechnique.component';
import { FormationComponent } from './pages/formation/formation.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { EventsComponent } from './pages/events/events.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'news', component: NewsletterComponent },
  { path: 'program-pilote', component: PiloteComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'admission', component: CompetitionComponent },
  { path: 'polytechnique/admission', component: AdmissionPolytechniqueComponent },
  { path: 'polytechnique/formation', component: FormationPolytechniqueComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServicesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
