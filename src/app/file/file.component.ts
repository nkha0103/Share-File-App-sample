import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFile } from '../interfaces/IFile';

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
  constructor() { }

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
}
