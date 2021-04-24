import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './member-list/member-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MaterialModule } from './material.module';
import { MemberFormComponent } from './member-form/member-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogModule } from './@root/confirm-dialog/confirm-dialog.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { FirebaseModule } from "../firebase/Firebase.module";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberFormComponent,
    LayoutComponent,
    DashboardComponent,
    ToolsComponent,
    ArticlesComponent,
    EventsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ConfirmDialogModule,
    FirebaseModule
  ],
  providers: [

  ],
   entryComponents: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
