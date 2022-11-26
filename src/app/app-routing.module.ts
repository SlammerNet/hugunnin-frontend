import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { CreateTheoryComponent } from './create-theory/create-theory.component';
import { DestroyTheoryComponent } from './destroy-theory/destroy-theory.component';
import { EasterEggComponent } from './easter-egg/easter-egg.component';
import { ListTheoriesComponent } from './list-theories/list-theories.component';
import { ListTheoryComponent } from './list-theory/list-theory.component';
import { ManageLabelsComponent } from './manage-labels/manage-labels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'create-theory', component: CreateTheoryComponent},
  {path: 'destroy-theory', component: DestroyTheoryComponent},
  {path: 'list-theories', component: ListTheoriesComponent},
  {path: 'list-theory', component: ListTheoryComponent},
  {path: 'manage-labels', component: ManageLabelsComponent},
  {path: 'ads', component: AdsComponent},
  {path: 'outside', component: EasterEggComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
