import {Component} from '@angular/core';

@Component ({
    selector: 'app-nav-side-bar',
    templateUrl: './nav-side-bar.component.html',
    styleUrls: ['./nav-side-bar.component.scss']
})
export class NavSideBarComponent {
    menus: string[];

    constructor() {
        this.menus = [
            'My files',
            'Sharing',
            'File request',
            'Delete file'
        ];
    }
}
