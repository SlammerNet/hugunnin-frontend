import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateTheoryComponent } from './create-theory/create-theory.component';
import { DestroyTheoryComponent } from './destroy-theory/destroy-theory.component';
import { ListTheoriesComponent } from './list-theories/list-theories.component';
import { ListTheoryComponent } from './list-theory/list-theory.component';
import { AdsComponent } from './ads/ads.component';
import { ManageLabelsComponent } from './manage-labels/manage-labels.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    CreateTheoryComponent,
    DestroyTheoryComponent,
    ListTheoriesComponent,
    ListTheoryComponent,
    AdsComponent,
    ManageLabelsComponent,
    EasterEggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
