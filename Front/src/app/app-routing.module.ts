import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';

import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

import { TorneosComponent } from './torneos/torneos.component';
import { TorneosEditComponent } from './torneos/torneos-edit/torneos-edit.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
    {
        path: "login",
        component: LoginComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "",
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "users",
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "users/edit/:id",
        component: UserEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "users/add",
        component: UserEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "torneos",
        component: TorneosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "torneos/add",
        component: TorneosEditComponent,
        canActivate: [AuthGuard]
    },
    {
        path: "torneos/edit/:id",
        component: TorneosEditComponent,
        canActivate: [AuthGuard]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }