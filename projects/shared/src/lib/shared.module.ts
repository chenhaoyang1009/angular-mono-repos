import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { TestComComponent } from './components/test-com/test-com.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';

@NgModule({
  declarations: [SharedComponent, TestComComponent],
  imports: [
    // 引入http
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  exports: [
    SharedComponent,
    // 需要export出对应的component
    TestComComponent,
  ],
})
export class SharedModule {}
