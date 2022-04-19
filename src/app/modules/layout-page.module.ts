import { NgModule } from '@angular/core';

import { LayoutPageComponent } from '@/components';
import { BreadcrumbsModule } from '@/modules/breadcrumbs.module';

@NgModule({
    declarations: [
        LayoutPageComponent,
    ],
    imports: [
        BreadcrumbsModule,
    ],
    exports: [
        LayoutPageComponent,
    ],
})
export class LayoutPageModule { }
