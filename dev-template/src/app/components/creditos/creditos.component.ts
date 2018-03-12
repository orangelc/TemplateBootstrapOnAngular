import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { DataLocalService } from "../../services/data-local.service";

// Declaramos las variables para jQuery
declare var jQuery:any;
declare var $:any;

@Component({
  selector: "app-creditos",
  templateUrl: "./creditos.component.html",
  styles: []
})
export class CreditosComponent implements OnInit {
  public creditos: any[];
  public creditoSeleccionado: any;
  public cantidadCreditos: number;

  constructor(private _localService: DataLocalService) {}

  ngOnInit() {
    this._localService.getJSON().subscribe(resp => {
      this.creditos = resp;
      this.cantidadCreditos = this.creditos.length;
    });
  }


  public editarSolicitud(credito) {
    this.creditoSeleccionado = credito;
    console.log("Se seleccionó el credito: " + credito);
    $("#editar_solicitud").modal();
  }
}
