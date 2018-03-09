import { Component, OnInit } from "@angular/core";
import {Observable} from 'rxjs/Rx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: "app-creditos",
  templateUrl: "./creditos.component.html",
  styles: []
})
export class CreditosComponent implements OnInit {
  
  public creditos: any[];
  public creditoSeleccionado: any;

  constructor(private _localService: DataLocalService) {
  }

  ngOnInit() {
    this._localService.getJSON()
    .subscribe(resp => {this.creditos = resp);
  }

  public editarSolicitud(credito) {
    this.creditoSeleccionado=credito;
    console.log('Se seleccionó el credito: ' + credito);
  }
}
