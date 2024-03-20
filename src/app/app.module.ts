import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrashIconComponent } from './components/Icons/trash-icon/trash-icon.component';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [AppComponent, TrashIconComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
