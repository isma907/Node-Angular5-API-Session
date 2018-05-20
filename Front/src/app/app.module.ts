import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

import { ContactosComponent } from './contactos/contactos.component';
import { ContactoEditComponent } from './contactos/contacto-edit/contacto-edit.component'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TorneosComponent } from './torneos/torneos.component';
import { TorneosEditComponent } from './torneos/torneos-edit/torneos-edit.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoEditComponent,
    TorneosComponent,
    TorneosEditComponent,
    LoginComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }