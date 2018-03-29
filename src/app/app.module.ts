import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavSideBarComponent } from './nav-side-bar/nav-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlsComponent } from './menu-controls/menu-controls.component';
import { FileComponent } from './file/file.component';
import { FileService } from './providers/file.service';
import { HttpClientModule } from '@angular/common/http';


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
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
