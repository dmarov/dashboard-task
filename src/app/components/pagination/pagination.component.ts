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
        return this.displayedRange[0] >= 1;
    }

    get hasRightDots() {
        return this.displayedRange[this.displayedRange.length - 1] <= this.totalPages - 2;
    }

    get range() {
        let range = this.displayedRange;

        if (this.hasLeftDots) {
            range.splice(0, 2);
        }

        if (this.hasRightDots) {
            range.splice(-2);
        }

        return range;
    }

    private get displayedRange() {
        const diameter = Math.min(2 * this.radius + 1, this.totalPages);
        const leftBorderCantBeLess = Math.max(0, this.activePage - this.radius);
        const leftBorderCantBeMore = Math.min(this.activePage, this.totalPages - diameter);
        const fromPage = Math.min(leftBorderCantBeLess, leftBorderCantBeMore);

        return Array.from({length: diameter}, (_v, k) => {
            return k + fromPage;
        });
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
