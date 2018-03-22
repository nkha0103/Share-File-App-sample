import { Component } from '@angular/core';

@Component ({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    files: any[] = [
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
      folder = 'Home';

      changeFolder(name) {
        this.folder = name;
    }

}


