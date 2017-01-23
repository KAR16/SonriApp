import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { QuienesSomosPage } from '../quienes-somos/quienes-somos';
import { NuestraMisionPage } from '../nuestra-mision/nuestra-mision';
import { NuestraHistoriaPage } from '../nuestra-historia/nuestra-historia';
import { SolicitaVisitaPage } from '../solicita-visita/solicita-visita';
import { DonativoPage } from '../donativo/donativo';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController) {

  }

  openQS(){
    this.navCtrl.push(QuienesSomosPage);
  }

  openNS(){
    this.navCtrl.push(NuestraMisionPage);
  }

  openNH(){
    this.navCtrl.push(NuestraHistoriaPage);
  }

  openSV(){
    this.navCtrl.push(SolicitaVisitaPage);
  }

  openD(){
    this.navCtrl.push(DonativoPage);
  }

}
