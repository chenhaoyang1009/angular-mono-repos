import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 引入共用组件
import { SharedModule, SharedService } from 'shared';
import { SoccersComponent } from './soccers/soccers.component';

@NgModule({
  declarations: [AppComponent, SoccersComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    SharedService,
    // { provide: TestServiceService, useClass: TestServiceService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
