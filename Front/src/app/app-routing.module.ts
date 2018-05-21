import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { TorneosComponent } from './torneos/torneos.component';
import { TorneosEditComponent } from './torneos/torneos-edit/torneos-edit.component';


const routes: Routes = [
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "",
        component: UsersComponent
    },
    {
        path: "users",
        component: UsersComponent,
    },
    {
        path: "users/edit/:id",
        component: UserEditComponent
    },
    {
        path: "users/add",
        component: UserEditComponent
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