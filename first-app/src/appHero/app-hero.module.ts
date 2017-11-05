
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeroComponent } from './app-hero.component';
import { HeroComponent } from './HeroDetail/hero-detail.component';

@NgModule({
    declarations: [
        AppHeroComponent,
        HeroComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppHeroComponent]
})
export class AppModule { }
