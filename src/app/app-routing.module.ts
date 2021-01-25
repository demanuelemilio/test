import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {path:'' , pathMatch:'full', redirectTo:'list'},
  {path:'list', component: ListComponent},
  {path:'filter', component: FilterComponent}  
];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
