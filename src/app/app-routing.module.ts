import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AptaiComponent } from './solutions/aptai/aptai.component';
import { AptahrComponent } from './solutions/aptahr/aptahr.component';
import { AptadfComponent } from './solutions/aptadf/aptadf.component';
import { AptabiComponent } from './solutions/aptabi/aptabi.component';
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
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AiandmlComponent } from './technology/aiandml/aiandml.component';
import { NewsdescriptionComponent } from './insights/newsroom/newsdescription/newsdescription.component';

const routes: Routes = [
  // {path:'', redirectTo: '/landing', pathMatch: 'full' },
  {path:'', component:LandingComponent},
  {path:'Solution/aptai', component:AptaiComponent},
  {path:'Solution/aptahr', component:AptahrComponent},
  {path:'Solution/aptadf', component:AptadfComponent},
  {path:'Solution/aptabi', component:AptabiComponent},
  {path:'Technology/aiandml', component:AiandmlComponent},
  {path:'Technology/predictivemaintenance', component:PredictivemaintenanceComponent},
  {path:'Technology/predictiveanalytics', component:PredictiveanalyticsComponent},
  {path:'Services/alaas', component:AlaasComponent},
  {path:'Services/mldevelopment', component:MldevelopmentComponent},
  {path:'Services/cybersecurity', component:CybersecurityComponent},
  {path:'Insights/testimonial', component:TestimonialsComponent},
  {path:'Insights/newsroom', component:NewsroomComponent},
  {path:'Insights/newsroom/newsdescription1', component:NewsdescriptionComponent},
  {path:'AboutUs/leadership', component:LeadershipComponent},
  {path:'AboutUs/partners', component:PartnersComponent},
  {path:'AboutUs/career', component:CareerComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
