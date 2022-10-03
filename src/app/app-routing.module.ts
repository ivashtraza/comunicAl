import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafeeComponent } from './cafee/cafee.component';
const routes: Routes = [
  // { path: '', component: CafeeComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
