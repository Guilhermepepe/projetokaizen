import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Passo1Component } from './views/passo1/passo1.component';
import { Passo2Component } from './views/passo2/passo2.component';
import { Passo21Component } from './views/passo21/passo21.component';
import { Passo3Component } from './views/passo3/passo3.component';
import { Passo4Component } from './views/passo4/passo4.component';

const routes: Routes = [{
  path: "",
  component: Passo1Component
},
{
  path: "passo3",
  component: Passo3Component
},
{
  path: "passo21",
  component: Passo21Component
},
{
  path: "passo4",
  component: Passo4Component
},
{
  path: "passo2",
  component: Passo2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
