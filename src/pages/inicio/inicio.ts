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
      'view': 'open(QS)'
    },
    {
      'title': 'Nuestra',
      'subtitle': 'Misión',
      'image': 'assets/img/card-amsterdam.png',
      'view': 'NM'
    },
    {
      'title': 'Nuestra',
      'subtitle': 'Historia',
      'image': 'assets/img/card-sf.png',
      'view': 'NH'
    },
    {
      'title': 'Se Un',
      'subtitle': 'Voluntario',
      'image': 'assets/img/card-amsterdam.png',
      'view': 'V'
    },
    {
      'title': 'Solicitanos',
      'subtitle': 'Una Visita',
      'image': 'assets/img/card-madison.png',
      'view': 'SV'
    },
    {
      'title': 'Has',
      'subtitle': 'Un Donativo',
      'image': 'assets/img/card-sf.png',
      'view': 'D'
    },
  ]
}

open(param){
  if (param == 'QS' ){
    this.navCtrl.push(QuienesSomosPage);
  }
  else if(param == 'NM' ){
    this.navCtrl.push(NuestraMisionPage);
  }
  else if(param == 'NH' ){
    this.navCtrl.push(NuestraHistoriaPage);
  }
  else if(param == 'SV' ){
    this.navCtrl.push(SolicitaVisitaPage);
  }
  else if(param == 'D' ){
    this.navCtrl.push(DonativoPage);
  }
}


}
