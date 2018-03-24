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
        'name': 'Angular',
        'modified': new Date(Date.now()),
        'member': ['Kha', 'Linh'],
        'type': 'folder'
      },
      {
        'name': 'Janeto Introduction',
        'modified': new Date(Date.now()),
        'member': ['An', 'Ngoc'],
        'type': 'doc'
      },
      {
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

  addFolder() {
    const iname = prompt('Nhap Ten Folder: ', 'Ten Folder');
    const imodified = new Date(Date.now());
    const imember = new Array(prompt('Nhap Thanh Vien: ', 'Thanh vien A, Thanh vien B'));
    const inputFile =
      [{
        'name': iname,
        'modified': imodified,
        'member': imember,
        'type': 'folder'
      }];
      this.files = inputFile.concat(this.files);
      console.log(this.files);
  }
}
