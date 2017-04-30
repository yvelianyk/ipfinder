import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-upload-form',
  templateUrl: './modal-upload-form.component.html',
  styleUrls: ['./modal-upload-form.component.css']
})
export class ModalUploadFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private translateService: TranslateService) {}

  fileForUploading: any;
  previewImageUrl: string;

  ngOnInit() {
    this._setUploadFilePlaceHolder();
  }

  onChange(event) {
    this._updatePreviewImage(event);
    this.fileForUploading = this._getFileFromInput(event);
  }

  isValid() {
    return this.previewImageUrl;
  }

  // --------------------------------------------------------------------------------------------
  // PRIVATE HELPERS:
  // --------------------------------------------------------------------------------------------

  private _setUploadFilePlaceHolder(): void {
    this.fileForUploading = {};

    switch (this.translateService.currentLang) {
      case 'en': {
        this.fileForUploading.name = 'Choose file...';
        break;
      }
      case 'ru': {
        this.fileForUploading.name = 'Выберите файл...';
        break;
      }
    }
  }

  private _updatePreviewImage(event: any): void {
    let files = event.srcElement.files;
    let reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(files[0]);
  }

  private _getFileFromInput(event: any): any {
    let files = event.srcElement.files;
    return files[0];
  }

  private _handleReaderLoaded(event: any): void {
    let reader = event.target;
    this.previewImageUrl = reader.result;
  }

}
