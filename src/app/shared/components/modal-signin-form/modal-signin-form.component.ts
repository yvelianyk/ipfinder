import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth.service';
import { TranslateService } from '@ngx-translate/core';

import { User } from '../../../core/models/user';

// TODO: add validation when invalid credentials, make refactoring(interface for auth Responses)

@Component({
  selector: 'app-modal-signin-form',
  templateUrl: './modal-signin-form.component.html',
  styleUrls: ['./modal-signin-form.component.css']
})
export class ModalSigninFormComponent {
  status: Promise<string> = null;
  submitted = false;
  user = new User('', '');

  constructor (
    public activeModal: NgbActiveModal,
    private auth: AuthService,
    private translate: TranslateService
  ) {
    this._initCurrentLanguage();
  }

  onSubmit() {
    this.auth.login(this.user).then((res) => {
      if (res.error) {
        this.user = new User('', '');
        return;
      }
      this.submitted = true;
      this.activeModal.dismiss();
      window.location.reload();
    });
  }

  submitFacebook() {
    this.auth.fbLogin().then((res) => {
      this.activeModal.dismiss();
      window.location.reload();
    });
  }

  private _initCurrentLanguage() {
    this.translate.use(localStorage.getItem('lang'));
  }

}
