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

    get hasLeftDots() {
        return this.activePage - this.radius > 1 + 2
    }

    get hasRightDots() {
        return this.activePage + this.radius < this.totalPages - 2
    }

    get range() {

        let fromPage = Math.max(1, this.activePage - this.radius);
        let toPage = Math.min(this.totalPages, this.activePage + this.radius);

        if (fromPage === 1) {
            ++fromPage;
        }

        if (toPage == this.totalPages) {
            --toPage;
        }

        if (fromPage > toPage) {
            return [];
        }

        if (fromPage === 3) {
            --fromPage;
        }

        if (toPage === this.totalPages - 2) {
            ++toPage;
        }

        const length = toPage - fromPage + 1;

        const res = Array.from({length: length}, (_v, k) => {
            return k + fromPage - 1;
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
        this.go(Math.min(this.totalPages - 1, this.activePage + 1));
    }


}
