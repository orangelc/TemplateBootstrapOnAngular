import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styles: []
})
export class CobranzaComponent implements OnInit {

  public cobranzas: any[];

  constructor(private _localService: DataLocalService) { }

  ngOnInit() {

    this._localService.getJSON()
    .subscribe(resp =>
      {
      this.cobranzas = resp;

    });
  }

}
