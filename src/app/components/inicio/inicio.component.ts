import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  public page_title: string;

  constructor() {
    this.page_title = 'Bienvenido!';
  }

  ngOnInit() {
  }

}
