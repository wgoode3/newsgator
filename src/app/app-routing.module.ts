import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArsComponent } from './ars/ars.component';
import { BbcComponent } from './bbc/bbc.component';
import { RedditComponent } from './reddit/reddit.component';

const routes: Routes = [
  {path: "ars", component: ArsComponent},
  {path: "bbc", component: BbcComponent},
  {path: "reddit", component: RedditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
