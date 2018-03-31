import { Component, OnInit, OnChanges } from '@angular/core';
import { IFile } from '../interfaces/IFile';
import { FileService } from '../providers/file.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnChanges {
  files: IFile[];
  folder = 'Home';

  constructor(private _fileService: FileService ) { }

  ngOnInit() {
    this._fileService.files.subscribe(newFiles => {
      this.files = newFiles;
    });
    this._fileService.getFiles();
  }

  ngOnChanges() {

  }

  changeFolder(name) {
    this.folder = name;
  }

  remove(_id) {
    const index = this.files.findIndex(file => file._id === _id);
    // this.files.splice(index, 1);
    this._fileService.removeFolder(_id, index);
  }
}
