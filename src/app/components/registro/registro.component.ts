import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  public page_title: string;

  constructor() {
      this.page_title = 'Registrate';
  }

  ngOnInit() {
  }

}
