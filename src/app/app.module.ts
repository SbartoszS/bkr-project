import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { CtaComponent } from './cta/cta.component';
import { NumbersComponent } from './numbers/numbers.component';
import { TeamComponent } from './team/team.component';
import { HowitworkComponent } from './howitwork/howitwork.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CtaComponent,
    NumbersComponent,
    TeamComponent,
    HowitworkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
