import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
    BreadcrumbsComponent,
} from '@/components';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
})
export class BreadcrumbsModule { }
