import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-modal-upload-form',
  templateUrl: './modal-upload-form.component.html',
  styleUrls: ['./modal-upload-form.component.css']
})
export class ModalUploadFormComponent {

  constructor (
    public activeModal: NgbActiveModal,
    private translate: TranslateService
  ) {
    this._initCurrentLanguage();
    this._setUploadFilePlaceHolder();
  }

  fileForUploading: any;
  previewImageUrl: string;

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

    switch (this.translate.currentLang) {
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

  private _initCurrentLanguage() {
    this.translate.use(localStorage.getItem('lang'));
  }

}
