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
  items = [];

  constructor(public navCtrl: NavController) {
  this.items = [
    {
      'title': '¿Quiénes',
      'subtitle': 'Somos?',
      'image': 'assets/img/card-saopaolo.png',
      'view': 'openQS()'
    },
    {
      'title': 'Nuestra',
      'subtitle': 'Misión',
      'image': 'assets/img/card-amsterdam.png',
      'view': 'openNS()'
    },
    {
      'title': 'Nuestra',
      'subtitle': 'Historia',
      'image': 'assets/img/card-sf.png',
      'view': 'openNH()'
    },
    {
      'title': 'Se Un',
      'subtitle': 'Voluntario',
      'image': 'assets/img/card-amsterdam.png',
      'view': 'openV()'
    },
    {
      'title': 'Solicitanos',
      'subtitle': 'Una Visita',
      'image': 'assets/img/card-madison.png',
      'view': 'openSV()'
    },
    {
      'title': 'Has',
      'subtitle': 'Un Donativo',
      'image': 'assets/img/card-sf.png',
      'view': 'openD()'
    },
  ]
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
