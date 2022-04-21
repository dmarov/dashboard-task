import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {

    @HostBinding('class.pagination')
    blockClass = true;

    @Input()
    totalPages: number;

    @Input()
    activePage: number;

    @Input()
    radius: number;

    @Output()
    onGo = new EventEmitter<number>();

    get range() {
        let from = Math.max(1, this.activePage - this.radius);
        let to = Math.min(this.totalPages, this.activePage + this.radius);

        if (from == 1) {
            ++from;
        }

        if (to == this.totalPages) {
            --to;
        }

        if (from > to) {
            return [];
        }

        if (from == 3) {
            --from;
        }

        if (to == this.totalPages - 2) {
            ++to;
        }

        const length = to - from + 1;

        const res = Array.from({length: length}, (_v, k) => {
            return k + from;
        });

        return res;
    }

    go(page: number) {
        this.onGo.emit(page);
    }

    goPrev() {
        this.go(Math.max(this.activePage - 1, 0));
    }

    goNext() {
        this.go(Math.min(this.totalPages, this.activePage + 1));
    }
}
