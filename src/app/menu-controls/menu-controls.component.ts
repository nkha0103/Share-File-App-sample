import { Component } from '@angular/core';

@Component ({
    selector: 'app-menu-controls',
    templateUrl: './menu-controls.component.html',
    styleUrls: ['./menu-controls.component.scss']
})

export class MenuControlsComponent {
    controls: string[];

    constructor() {
        this.controls = [
            'New shared folder',
            'New folder',
            'Show hidden folder'
        ];
    }

}
