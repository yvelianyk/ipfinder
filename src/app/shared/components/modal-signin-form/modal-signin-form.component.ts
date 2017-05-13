import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../core/services/auth.service'

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

  constructor(public activeModal: NgbActiveModal, private auth: AuthService) {
    this.status = this.auth.isConnected;
  }

  onSubmit() {
    this.submitted = true;
  }

  submitFacebook() {
    this.auth.login();
  }

}
