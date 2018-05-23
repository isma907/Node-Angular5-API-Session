import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TorneosComponent } from './torneos/torneos.component';
import { TorneosEditComponent } from './torneos/torneos-edit/torneos-edit.component';
import { LoginComponent } from './login/login.component';


//Services
import { AuthService } from './services/auth.service'
import { UserService } from './services/users.service'
import { AuthGuard } from './auth/auth.guard';
import { FixtureComponent } from './torneos/fixture/fixture.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    TorneosComponent,
    TorneosEditComponent,
    LoginComponent,
    FixtureComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [UserService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
