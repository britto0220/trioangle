import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigningPageComponent } from './signing-page.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    
    path: '',
    component: SigningPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigningPageRoutingModule {}
