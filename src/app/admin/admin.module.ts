import { DemoMaterialModule } from './../demo-material-module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormModule } from './../forms/forms.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table'

import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchpipePipe } from './pipes/searchpipe.pipe';
import { DataTablesModule } from '../datatables/datatables.module';


@NgModule({
  declarations: [UserListComponent, AddUserComponent, ViewUserComponent, SearchpipePipe],
  imports: [
CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    FlexLayoutModule,

    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    DemoMaterialModule,
    MatPaginatorModule,
    DataTablesModule
  ]
})
export class AdminModule { }
