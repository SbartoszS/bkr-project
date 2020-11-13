import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CtaComponent } from './cta/cta.component';
import { NumbersComponent } from './numbers/numbers.component';
import { TeamComponent } from './team/team.component';
import { HowitworkComponent } from './howitwork/howitwork.component';
import { WhybkrComponent } from './whybkr/whybkr.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CreditComponent } from './header/credit/credit.component';
import { FormComponent } from './header/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CtaComponent,
    NumbersComponent,
    TeamComponent,
    HowitworkComponent,
    WhybkrComponent,
    AdvantagesComponent,
    HeaderComponent,
    NavbarComponent,
    CreditComponent,
    FormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
