import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const components = [
  HeaderComponent,
    NavigationComponent,
    SidenavComponent
]

const materialModule = [
  MatButtonModule,
  MatIconModule
]

@NgModule({
  imports: [CommonModule, materialModule],

  declarations: [
    components
  ],
  exports: [components, materialModule],
})
export class CoreModule { }
