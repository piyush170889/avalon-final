import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurBusinessesComponent } from './pages/our-businesses/our-businesses.component';
import { HomeComponent } from './pages/home/home.component';
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
import { FeaturedPropertiesResolver } from './pages/home/featured-prop.resolver';
import { PropertiesResolver } from './core/resolver/properties.resolver';
import { BlogsResolver } from './core/resolver/blogs.resolver';
import { HomePropertyComponent } from './pages/home-property/home-property.component';

// RouterModule.forRoot(routes, {
//   scrollPositionRestoration: 'enabled'
// }),

const routes: Routes = [
 {
  path: 'leadershp/id',
  component: LeadershpComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(
    [
  
      {


        path: '',
        component: HomeComponent,
        resolve: {
          featuredProps: FeaturedPropertiesResolver,
          properties: PropertiesResolver,
          blogs: BlogsResolver
        }
      },

      {
        path: 'properties',
        component: PropertiesComponent,
        resolve: {
          properties: PropertiesResolver
        }
      },
      {
        path: 'property-home',
        component: HomePropertyComponent
      },
      {
        path: 'leadershp/:id',
        component: LeadershpComponent
      },
      {
        path: 'leadershp',
        component: LeadershpComponent
      },
      {
        path: 'brand-assocate',
        component: BrandAssocatesComponent
      },
      {
        path: 'job-opportunity',
        component: JobOpportunityComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'foreward',
        component: ForewardComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'philosophy',
        component: PhilosophyComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        resolve: {
          blogs: BlogsResolver
        }
      },
      {
        path: 'roadmap',
        component: RoadmapComponent
      },
      {
        path: 'life',
        component: LifeComponent
      },
      {
        path: 'media',
        component: MediaComponent
      },
      {
        path: 'healthsafety',
        component: HealthsafetyComponent
      },
      {
        path: 'healthandsafety',
        component: HealthandsafetyComponent
      },
      {
        path: 'blogdetail/:blogdetailsid',
        component: BlogdetailComponent
      }
     


      // {
      //   path: 'our-businesses',
      //   component: OurBusinessesComponent
      // },
      // {
      //   path: 'avalon-beauty',
      //   component: AvalonBeautyComponent
      // }
    ],
    {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    },
  

  )],
  exports: [RouterModule],
  providers: [FeaturedPropertiesResolver, PropertiesResolver, BlogsResolver]
})
export class AppRoutingModule {

}
