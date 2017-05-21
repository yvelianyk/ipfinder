import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../../core/models/user';

@Component({
  selector: 'app-modal-signin-form',
  templateUrl: './modal-signin-form.component.html',
  styleUrls: ['./modal-signin-form.component.css']
})
export class ModalSigninFormComponent {
  status: Promise<string> = null;
  submitted = false;
  rememberMe = true;
  user = new User('', '');

  constructor (
    public activeModal: NgbActiveModal,
    private auth: AuthService,
    private translate: TranslateService
  ) {
    this._initCurrentLanguage();
  }

  onSubmit() {
    this.submitted = true;
  }

  submitFacebook() {
    this.auth.login();
  }

  private _initCurrentLanguage() {
    this.translate.use(localStorage.getItem('lang'));
  }

}
