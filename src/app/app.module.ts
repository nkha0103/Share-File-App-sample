import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlsComponent } from './menu-controls/menu-controls.component';
import { FileComponent } from './file/file.component';


@NgModule({
  declarations: [
    AppComponent,
    NavSideBarComponent,
    ContainerComponent,
    HeaderComponent,
    MenuControlsComponent,
    FileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
