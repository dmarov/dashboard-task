import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    moduleLoading: boolean;

    constructor(
        private router: Router,
    ) { }

    ngOnInit () {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart) {
                this.moduleLoading = true;
            } else if (event instanceof RouteConfigLoadEnd) {
                this.moduleLoading = false;
            }
        });
    }
}
