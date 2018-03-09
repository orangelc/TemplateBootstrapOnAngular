import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-dispersion',
  templateUrl: './dispersion.component.html',
  styles: []
})
export class DispersionComponent implements OnInit {

  public dispersiones: any[];

  constructor(private _localService: DataLocalService) { }

  ngOnInit() {

    this._localService.getJSON()
    .subscribe(resp => {this.dispersiones = resp);
  }

}
