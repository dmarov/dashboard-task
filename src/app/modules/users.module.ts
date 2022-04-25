import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    PageUserComponent,
} from '@/components';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '@/modules/layout-page.module';
import { UsersService } from '@/services';
import { LoaderModule } from '@/modules/loader.module';

const routes: Routes = [
    { path: ':id', component: PageUserComponent },
];

@NgModule({
    declarations: [
        PageUserComponent,
    ],
    imports: [
        LoaderModule,
        CommonModule,
        RouterModule.forChild(routes),
        LayoutPageModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        UsersService,
    ]
})
export class UsersModule { }
