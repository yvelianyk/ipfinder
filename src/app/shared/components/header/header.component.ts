import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUploadFormComponent } from '../modal-upload-form/modal-upload-form.component'
import { ModalSigninFormComponent } from '../modal-signin-form/modal-signin-form.component'
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IUser;

  constructor(private translate: TranslateService,
              private modalService: NgbModal,
              private route: ActivatedRoute) {}

  changeLang(lang: string) {
    localStorage.setItem('lang',lang);
    this.translate.use(lang);
  }

  ngOnInit() {
    this.user = this.route.snapshot.data['user'];
  }

  upload() {
    const modalRef = this.modalService.open(ModalUploadFormComponent);
    modalRef.componentInstance.name = 'World';
  }

  signin() {
    const modalRef = this.modalService.open(ModalSigninFormComponent);
    modalRef.componentInstance.name = 'Login';
  }

}
