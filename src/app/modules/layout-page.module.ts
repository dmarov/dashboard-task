import { NgModule } from '@angular/core';

import {
    LayoutPageGenericComponent,
    LayoutPageBoldHeaderComponent,
} from '@/components';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

@NgModule({
    declarations: [
        LayoutPageGenericComponent,
        LayoutPageBoldHeaderComponent,
    ],
    imports: [
        BreadcrumbsModule,
    ],
    exports: [
        LayoutPageGenericComponent,
        LayoutPageBoldHeaderComponent,
    ],
})
export class LayoutPageModule { }
