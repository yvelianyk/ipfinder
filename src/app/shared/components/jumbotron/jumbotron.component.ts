import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUploadFormComponent } from '../modal-upload-form/modal-upload-form.component'

@Component({
  selector: 'app-jumbotron',
  templateUrl: 'jumbotron.component.html',
  styleUrls: ['jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  upload() {
    const modalRef = this.modalService.open(ModalUploadFormComponent);
    modalRef.componentInstance.name = 'World';
  }
}
