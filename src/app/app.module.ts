import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material.module';
import { SearchComponent } from './modules/search/search.component';
import { ErrorComponent } from './modules/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
