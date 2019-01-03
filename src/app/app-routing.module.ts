import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: 'finance', component: FinanceComponent },
  { path: 'music', component: MusicComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
