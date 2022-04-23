import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
    PhotoEntryComponent,
} from '@/components';

@NgModule({
    declarations: [
        PhotoEntryComponent,
    ],
    imports: [
        RouterModule,
    ],
    exports: [
        PhotoEntryComponent,
    ]
})
export class PhotoComponentsModule { }
