import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引入library
import { SharedModule, SharedService } from 'shared';
import { SoccersComponent } from './soccers/soccers.component';

@NgModule({
  declarations: [AppComponent, SoccersComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
