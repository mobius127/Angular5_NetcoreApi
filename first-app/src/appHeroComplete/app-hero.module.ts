import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppHeroComponent } from './app-hero/app-hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './Services/hero.service';

@NgModule({
  // Aqui se declaran todos los componentes de la aplicacion
  declarations: [
    AppHeroComponent,
    HeroListComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  // Aqui se insertan las dependencias de la aplicacion
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'heroes',
        component: HeroListComponent
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  // Aqui se meten los servicios que lleva la aplicacion
  providers: [HeroService],
  // Aqui indicamos cual sera el componente principal de la aplicacion
  bootstrap: [AppHeroComponent]
})
export class AppHeroModule {}
