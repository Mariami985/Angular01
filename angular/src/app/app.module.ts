import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component:  ContactComponent
  },
  {
    path: 'news',
    component: NewComponent,
    children: [
      {
        path: 'details',
        component:  DetailsComponent,
      },
      {
        path: ' details2',
        component: Details2Component,
      },
    ]

  }, {
    path: '**',
    component: NotFoundComponent,
  },


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    ContactComponent,
    NewComponent,
    DetailsComponent,
    Details2Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
