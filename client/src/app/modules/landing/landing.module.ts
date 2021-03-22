import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.page';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './components/core/core.component';


@NgModule({
  declarations: [
    //pages
    LandingComponent, 

    //components
    HeaderComponent, CoreComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
})
export class LandingModule { }
