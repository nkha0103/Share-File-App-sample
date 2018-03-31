import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class HeaderService {
    private _header: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() {}

    get header() {
        return this._header.asObservable();
    }

    getHeader(name) {
        this._header.next(name);
    }
}
