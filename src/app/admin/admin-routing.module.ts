import { ViewUserComponent } from './view-user/view-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path: 'getAllUserData',
    component: UserListComponent,
    data: {
        title: 'AllUsers',
        urls: [
            { title: 'Dashboard', url: '/admin' },
            { title: 'AllUsers' }
        ]
    }
},
{
  path: 'getOneDataOfUser/:id',
  component: ViewUserComponent,
  data: {
      title: 'View User',
      urls: [
          { title: 'Dashboard', url: '/admin' },
          { title: 'View User' }
      ]
  }
},

{
  path: 'userRegister',
  component: AddUserComponent,
  data: {
      title: 'Add User',
      urls: [
          { title: 'Dashboard', url: '/admin' },
          { title: 'Add User' }
      ]
  }
},
  {
    path: '',
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
