import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotonComponent } from './jumboton/jumboton.component';
import { PlaceComponent } from './place/place.component';
import { DdepartmentComponent } from './ddepartment/ddepartment.component';
import { DddepartmentComponent } from './dddepartment/dddepartment.component';
import { SearchComponent } from './search/search.component';
import { EapmComponent } from './eapm/eapm.component';

import { Jumboton2Component } from './jumboton2/jumboton2.component';
import { Jumboton3Component } from './jumboton3/jumboton3.component';
const appRoutes: Routes = [

  { path:'dddepartment', component: DddepartmentComponent  },
  { path:'eapm', component: EapmComponent  },
  { path:'home2', component: Jumboton2Component },
  { path:'home3', component: Jumboton3Component },
  { path:'search', component: SearchComponent },
  { path:'department', component: DdepartmentComponent },
  { path:'place', component: PlaceComponent },

  { path:'**'   , component: JumbotonComponent  },

];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotonComponent,
    PlaceComponent,
    DdepartmentComponent,
    DddepartmentComponent,
    SearchComponent,
    EapmComponent,

    Jumboton2Component,
    Jumboton3Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
