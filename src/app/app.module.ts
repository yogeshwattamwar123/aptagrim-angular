import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TechnologyComponent } from './technology/technology.component';
import { ServicesComponent } from './services/services.component';
import { InsightsComponent } from './insights/insights.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import * as $ from 'jquery';
import { AptaiComponent } from './solutions/aptai/aptai.component';
import { AptahrComponent } from './solutions/aptahr/aptahr.component';
import { AptadfComponent } from './solutions/aptadf/aptadf.component';
import { AptabiComponent } from './solutions/aptabi/aptabi.component';
import { AiandmlComponent } from './technology/aiandml/aiandml.component';
import { PredictivemaintenanceComponent } from './technology/predictivemaintenance/predictivemaintenance.component';
import { PredictiveanalyticsComponent } from './technology/predictiveanalytics/predictiveanalytics.component';
import { AlaasComponent } from './services/alaas/alaas.component';
import { MldevelopmentComponent } from './services/mldevelopment/mldevelopment.component';
import { CybersecurityComponent } from './services/cybersecurity/cybersecurity.component';
import { TestimonialsComponent } from './insights/testimonials/testimonials.component';
import { NewsroomComponent } from './insights/newsroom/newsroom.component';
import { LeadershipComponent } from './aboutus/leadership/leadership.component';
import { PartnersComponent } from './aboutus/partners/partners.component';
import { CareerComponent } from './aboutus/career/career.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JobdescriptionComponent } from './aboutus/career/jobdescription/jobdescription.component';
import { NewsdescriptionComponent } from './insights/newsroom/newsdescription/newsdescription.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsdataService } from './jobsdata.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    SolutionsComponent,
    TechnologyComponent,
    ServicesComponent,
    InsightsComponent,
    AboutusComponent,
    ContactComponent,
    AptaiComponent,
    AptahrComponent,
    AptadfComponent,
    AptabiComponent,
    AiandmlComponent,
    PredictivemaintenanceComponent,
    PredictiveanalyticsComponent,
    AlaasComponent,
    MldevelopmentComponent,
    CybersecurityComponent,
    TestimonialsComponent,
    NewsroomComponent,
    LeadershipComponent,
    PartnersComponent,
    CareerComponent,
    PagenotfoundComponent,
    JobdescriptionComponent,
    NewsdescriptionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MalihuScrollbarModule.forRoot(),
  ],
  providers: [JobsdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
