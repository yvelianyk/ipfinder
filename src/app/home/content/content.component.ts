import { Component, OnInit } from '@angular/core';
import { Thumbnail } from '../../core/models/thumbnail';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  thumbnails: Thumbnail[];

  ngOnInit() {
    this.thumbnails = [];
    for (let i = 0; i < 12; i++){
      this.thumbnails.push({src: 'http://placehold.it/400x300'});
    }
  }

}
