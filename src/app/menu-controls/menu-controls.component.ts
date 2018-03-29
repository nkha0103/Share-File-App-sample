import { Component, OnInit } from '@angular/core';
import { FileService } from './../providers/file.service';
import { IFile } from '../interfaces/IFile';

@Component ({
    selector: 'app-menu-controls',
    templateUrl: './menu-controls.component.html',
    styleUrls: ['./menu-controls.component.scss']
})

export class MenuControlsComponent implements OnInit {
    files: IFile[];

    constructor(private _fileService: FileService) {}

    ngOnInit() {

    }

    addFolder() {
        const iname = prompt('Nhap Ten Folder: ', 'Ten Folder');
        const imodified = new Date(Date.now());
        const imember = new Array(prompt('Nhap Thanh Vien: ', 'Thanh vien A, Thanh vien B'));
        this._fileService.files.subscribe(newFiles => {this.files = newFiles; });
        this._fileService.addFolder({
            id: this.files.length + 1,
            name: iname,
            modified: imodified,
            member: imember,
            type: 'folder'
        });
      }

}
