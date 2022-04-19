import { NgModule } from '@angular/core';

import {
    BreadcrumbsComponent,
} from '@/components';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
    ],
    exports: [
        BreadcrumbsComponent,
    ],
})
export class BreadcrumbsModule { }
