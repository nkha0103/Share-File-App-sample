import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFile } from '../interfaces/IFile';
import { FileService } from '../providers/file.service';
import { HeaderService } from '../providers/header.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() file: IFile;
  @Output() go: EventEmitter<String> = new EventEmitter<String>();
  @Output() rmid: EventEmitter<String> = new EventEmitter<String>();
  constructor(private _fileService: FileService, private _headerService: HeaderService) { }

  action(file: any) {
    alert(file.name);
  }

  goTo(name: String) {
    this.go.emit(name);
    console.log(this.go);
  }

  remove(_id: String) {
    this.rmid.emit(_id);
    console.log(this.rmid);
  }

  goToFolder(folder: IFile) {
    if (folder.type === 'folder') {
      this._fileService.getFiles({ search: '', parentId: folder._id });
      const name = folder.name;
      this._headerService.getHeader(name);
    }
  }
}
