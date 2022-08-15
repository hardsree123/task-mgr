import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskListingComponent } from './task-listing/task-listing.component';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MediaQueryStatusComponent } from './shared/media-query-status.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskOverviewComponent } from './task-overview/task-overview.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TaskListingComponent,
    MediaQueryStatusComponent,
    TaskDetailsComponent,
    TaskOverviewComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
