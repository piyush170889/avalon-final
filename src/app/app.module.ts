import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
// import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule } from "@angular/material";
// import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Router, Scroll } from '@angular/router';
import { RoutingComponentComponent } from './pages/routing-component/routing-component.component';
import { AvalonBeautyComponent } from './pages/avalon-beauty/avalon-beauty.component';
import { LeadershpComponent } from './pages/leadershp/leadershp.component';
import { JobOpportunityComponent } from './pages/job-opportunity/job-opportunity.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrandAssocatesComponent } from './pages/brand-assocates/brand-assocates.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ForewardComponent } from './pages/foreward/foreward.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PhilosophyComponent } from './pages/philosophy/philosophy.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { RoadmapComponent } from './pages/roadmap/roadmap.component';
import { LifeComponent } from './pages/life/life.component';
import { MediaComponent } from './pages/media/media.component';
import { BlogdetailComponent } from './pages/blogdetail/blogdetail.component';
import { HealthsafetyComponent } from './pages/healthsafety/healthsafety.component';
import { HealthandsafetyComponent } from './pages/healthandsafety/healthandsafety.component';
import { DataService } from './core/services/dataservices/data.service';
import { HttpClientModule } from '@angular/common/http';
import { HomePropertyComponent } from './pages/home-property/home-property.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponentComponent,
    AvalonBeautyComponent,
    LeadershpComponent,
    JobOpportunityComponent,
    ContactComponent,
    BrandAssocatesComponent,
    PropertiesComponent,
    ForewardComponent,
    ProfileComponent,
    PhilosophyComponent,
    PartnersComponent,
    BlogsComponent,
    RoadmapComponent,
    LifeComponent,
    MediaComponent,
    BlogdetailComponent,
    HealthsafetyComponent,
    HealthandsafetyComponent,
    HomePropertyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    // MatToolbarModule,
    // MatSidenavModule,
    // MatListModule,
    // MatIconModule,
    // MatButtonModule,
    // FlexLayoutModule
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {



}
