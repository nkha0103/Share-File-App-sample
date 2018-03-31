import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../providers/header.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
    header: String = 'File Share';
    constructor(private _headerService: HeaderService) { }

    ngOnInit() {
        this._headerService.header.subscribe(newHeader => {
            if (newHeader === '') {
                return;
            } else {
                this.header = this.header + ' > ' + newHeader;
            }
        });
    }
}
