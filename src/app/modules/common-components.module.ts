import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    SortTogglerComponent,
} from '@/components';

@NgModule({
    declarations: [
        SortTogglerComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        SortTogglerComponent,
    ]
})
export class CommonComponentsModule { }
