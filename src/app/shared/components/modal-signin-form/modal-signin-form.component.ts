import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { User } from '../../models/user';

@Component({
  selector: 'app-modal-signin-form',
  templateUrl: './modal-signin-form.component.html',
  styleUrls: ['./modal-signin-form.component.css']
})
export class ModalSigninFormComponent {

  constructor(public activeModal: NgbActiveModal) { }

  submitted = false;
  rememberMe = true;

  user = new User('', '');

  onSubmit() {
    this.submitted = true;
    // TODO: in this place should be sending data to the server
  }

}
