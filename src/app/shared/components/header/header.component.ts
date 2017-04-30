import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUploadFormComponent } from '../modal-upload-form/modal-upload-form.component'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService, private modalService: NgbModal) {}

  changeLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit() {
  }

  upload() {
    const modalRef = this.modalService.open(ModalUploadFormComponent);
    modalRef.componentInstance.name = 'World';
  }

}
