import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule, HttpClient} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SearchComponent } from './components/shared/search/search.component';
import { ActionsComponent } from './components/shared/actions/actions.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { StatusBarComponent } from './components/shared/status-bar/status-bar.component';
import { EditModalComponent } from './components/shared/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/shared/delete-modal/delete-modal.component';
import { DetailModalComponent } from './components/shared/detail-modal/detail-modal.component';
import { RegistryModalComponent } from './components/shared/registry-modal/registry-modal.component';
import { ExportModalComponent } from './components/shared/export-modal/export-modal.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { CobranzaComponent } from './components/cobranza/cobranza.component';
import { DispersionComponent } from './components/dispersion/dispersion.component';
import { HomeComponent } from './components/home/home.component';
import { DataLocalService } from './services/data-local.service';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  { path: '', component: RegistroComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'dispersion', component: DispersionComponent },
  { path: 'cobranza', component: CobranzaComponent },
  { path: '**', component: RegistroComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ActionsComponent,
    PaginationComponent,
    StatusBarComponent,
    EditModalComponent,
    DeleteModalComponent,
    DetailModalComponent,
    RegistryModalComponent,
    ExportModalComponent,
    CreditosComponent,
    CobranzaComponent,
    DispersionComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DataLocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
