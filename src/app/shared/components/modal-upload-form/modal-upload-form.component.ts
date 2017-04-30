import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-upload-form',
  templateUrl: './modal-upload-form.component.html',
  styleUrls: ['./modal-upload-form.component.css']
})
export class ModalUploadFormComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
