import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Shared module
import { SharedModule } from './shared/shared.module';

// Composants
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './static/header/header.component';
import { PartnersComponent } from './static/partner/partner.component';
import { FooterComponent } from './static/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FourOhFourComponent } from './pages/four-oh-four/four-oh-four.component';
import { LanguageComponent } from './static/language/language.component';
import { MenuComponent } from './static/menu/menu.component';
import { ScrollTopComponent } from './static/scroll-top/scroll-top.component';
import { NewsletterComponent } from './pages/newsletter/newsletter.component';
import { PiloteComponent } from './pages/pilote/pilote.component';
import { PageTitleComponent } from './static/page-title/page-title.component';
import { PolytechniqueComponent } from './pages/polytechnique/polytechnique.component';
import { AdmissionPolytechniqueComponent } from './pages/polytechnique/admission-polytechnique/admission-polytechnique.component';
import { FormationPolytechniqueComponent } from './pages/polytechnique/formation-polytechnique/formation-polytechnique.component';
import { FormationComponent } from './pages/formation/formation.component';
import { CompetitionComponent } from './pages/competition/competition.component';
import { EventsComponent } from './pages/events/events.component';

// Services
import { LocaleService } from './services/locale.service';
import { EventsService } from './services/events/events.service';

// ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpinnerComponent } from './shared/spinner/spinner.component';

// AoT requires an exported function for factories  

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    AdmissionPolytechniqueComponent,
    HomeComponent,
    HeaderComponent,
    PartnersComponent,
    FooterComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FourOhFourComponent,
    LanguageComponent,
    MenuComponent,
    ScrollTopComponent,
    NewsletterComponent,
    PiloteComponent,
    PageTitleComponent,
    PolytechniqueComponent,
    FormationPolytechniqueComponent,
    FormationComponent,
    CompetitionComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule, // <-- AJOUTÉ pour que tous les composants voient translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LocaleService,
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
