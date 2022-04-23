import { NgModule } from '@angular/core';

import { LayoutPageGenericComponent } from '@/components';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

@NgModule({
    declarations: [
        LayoutPageGenericComponent,
    ],
    imports: [
        BreadcrumbsModule,
    ],
    exports: [
        LayoutPageGenericComponent,
    ],
})
export class LayoutPageModule { }
