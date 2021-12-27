import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthencationGuard } from './authencation.guard';
import { CreateItemComponent } from './create-item/create-item.component';
import { SigningPageComponent } from './signing-page/signing-page.component';
import { ViewItemComponent } from './view-item/view-item.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
path:'login',component:SigningPageComponent
},
{
  canActivate:[AuthencationGuard],

  path:'create',component:CreateItemComponent
  },
  {
    canActivate:[AuthencationGuard],

    path:'view',component:ViewItemComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
