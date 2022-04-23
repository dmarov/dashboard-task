import { SortType } from '@/models';
import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
    selector: 'app-sort-toggler',
    templateUrl: './sort-toggler.component.html',
    styleUrls: ['./sort-toggler.component.scss'],
})
export class SortTogglerComponent {
    @HostBinding('class.sort-toggler')
    blockClass = true;

    @Input()
    ngModel: SortType;

    @Output()
    ngModelChange: EventEmitter<SortType> = new EventEmitter<SortType>();

    get isAsc() {
        return this.ngModel === SortType.Asc;
    }

    get isDesc() {
        return this.ngModel === SortType.Desc;
    }

    setAsc() {
        this.ngModelChange.emit(SortType.Asc);
    }

    setDesc() {
        this.ngModelChange.emit(SortType.Desc);
    }
}
