import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { UsersService } from './services/users-service';
import { UserListComponent } from './components/user-list/user-list.component';

const appRoutes: Routes = [
  {
    path: "overview",
    component: UserListComponent
  },
  {
    path: "",
    redirectTo: "/overview",
    pathMatch: "full"
  }
  // ,{path: ":user", component: UserDetailComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
