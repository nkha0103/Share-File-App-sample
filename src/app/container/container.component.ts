import { Component, OnInit, OnChanges } from '@angular/core';
import { IFile } from '../interfaces/IFile';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnChanges {
  files: IFile[];
  folder = 'Home';

  ngOnInit() {
    this.files = [
      {
        'id': 1,
        'name': 'Angular',
        'modified': new Date(Date.now()),
        'member': ['Kha', 'Linh'],
        'type': 'folder'
      },
      {
        'id': 2,
        'name': 'Janeto Introduction',
        'modified': new Date(Date.now()),
        'member': ['An', 'Ngoc'],
        'type': 'doc'
      },
      {
        'id': 3,
        'name': 'Nodejs',
        'modified': new Date(Date.now()),
        'member': ['Chien', 'Nhu'],
        'type': 'folder'
      }
    ];
  }

  ngOnChanges() {

  }

  changeFolder(name) {
    this.folder = name;
  }

  addFile() {
    const iname = prompt('Nhap Ten Folder: ', 'Ten Folder');
    const imodified = new Date(Date.now());
    const imember = new Array(prompt('Nhap Thanh Vien: ', 'Thanh vien A, Thanh vien B'));
    const inputFile =
      [{
        'id': this.files.length + 1,
        'name': iname,
        'modified': imodified,
        'member': imember,
        'type': 'folder'
      }];
      this.files = inputFile.concat(this.files);
      console.log(this.files);
  }

  remove(id) {
    const index = this.files.findIndex(file => file.id === id);
    this.files.splice(index, 1);
  }
}
