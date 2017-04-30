import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-signin-form',
  templateUrl: './modal-signin-form.component.html',
  styleUrls: ['./modal-signin-form.component.css']
})
export class ModalSigninFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
