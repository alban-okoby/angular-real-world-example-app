import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

const homeRouting: ModuleWithProviders<any> = RouterModule.forChild([
  { path: '', component: HomeComponent}
]);

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    homeRouting,
    SharedModule
  ],
  providers: []
})
export class HomeModule { }
