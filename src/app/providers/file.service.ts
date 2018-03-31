import { IFile } from './../interfaces/IFile';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FileService {
    private _files: BehaviorSubject<IFile[]> = new BehaviorSubject([]);

    constructor(private http: HttpClient) { }

    get files() {
        return this._files.asObservable();
    }

    getFiles(query?) {
        const body = query ? query : {
            search: '',
            parentId: 'root'
        };
        this.http.post('http://fisa.lexuanquynh.com/api/file/find', body)
            .subscribe((files: any[]) => {
                files.map(f => {
                    f.type = f.isFile ? 'file' : 'folder';
                    return f;
                });
                this._files.next(files);
                console.log(files);
            });
    }

    // getFiles(): IFile[] {
    //     return [{
    //         'id': 1,
    //         'name': 'Angular',
    //         'modified': new Date(Date.now()),
    //         'member': ['Kha', 'Linh'],
    //         'type': 'folder'
    //     },
    //     {
    //         'id': 2,
    //         'name': 'Janeto Introduction',
    //         'modified': new Date(Date.now()),
    //         'member': ['An', 'Ngoc'],
    //         'type': 'doc'
    //     },
    //     {
    //         'id': 3,
    //         'name': 'Nodejs',
    //         'modified': new Date(Date.now()),
    //         'member': ['Chien', 'Nhu'],
    //         'type': 'folder'
    //     }];
    // }

    addFolder(folder: IFile) {
        const body = {
            parentId: '',
            name: folder.name
        };
        this.http.post('http://fisa.lexuanquynh.com/api/file/folder', body)
            .subscribe((sfiles: any[]) => {
                sfiles.push(folder);
                this.getFiles();
            });
        // this._files.getValue().push(folder);
        // const newFiles = this._files.getValue();
        // this._files.next(newFiles);
    }

    removeFolder(_id: string, index) {
        this.http.delete('http://fisa.lexuanquynh.com/api/file/delete/' + _id)
            .subscribe((rmfiles: any[]) => {
                rmfiles.splice(index, 1);
                this.getFiles();
            }
        );
    }
}


