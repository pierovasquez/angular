import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound: Boolean = false;

  constructor(
    private _imageService: ImageService
  ) { }

  ngOnInit() {
  }

  searchImages(query: string) {
    return this._imageService.getImage(query).subscribe(
      data => this.handSuccess(data),
      error => this.handleError(error),
      () => console.log('complete')
    );
  }

  handSuccess(data) {
    this.imagesFound = true;
    console.log('data', data);
    this.images = data.hits;
  }

  handleError(data) {
    console.log(data);
  }
}
