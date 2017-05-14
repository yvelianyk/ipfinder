import { Component, OnInit } from '@angular/core';
import { Thumbnail } from '../../core/models/thumbnail';
import { ImagesService } from '../../core/services/images.service';

@Component({
  selector: 'app-content',
  templateUrl: 'content.component.html',
  styleUrls: ['content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private images: ImagesService) { }

  thumbnails: Thumbnail[];

  ngOnInit() {
    this.images.getImages().then(thumbnails => {
      this.thumbnails = thumbnails
    });
  }

}
