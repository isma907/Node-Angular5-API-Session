import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { ContactosComponent } from './contactos/contactos.component';
import { ContactoEditComponent } from './contactos/contacto-edit/contacto-edit.component';

import { TorneosComponent } from './torneos/torneos.component';
import { TorneosEditComponent } from './torneos/torneos-edit/torneos-edit.component';


const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: ContactosComponent
    },
    {
        path: "contactos",
        component: ContactosComponent,
    },
    {
        path: "contactos/edit/:id",
        component: ContactoEditComponent
    },
    {
        path: "contactos/add",
        component: ContactoEditComponent
    },
    {
        path: "torneos",
        component: TorneosComponent
    },
    {
        path: "torneos/add",
        component: TorneosEditComponent
    },
    {
        path: "torneos/edit/:id",
        component: TorneosEditComponent
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }