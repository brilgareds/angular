import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public page_title: string;

  constructor() {
      this.page_title = 'Direccion no encontrada';
  }

  ngOnInit() {
  }

}
