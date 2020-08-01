import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  @Input() enFavoritos;

  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocalService: DataLocalService
  ) { }

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if ( this.enFavoritos ) {
      guardarBorrarBtn = {
        text: 'Borrar Favorito',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Borrar de Favorito');
          this.dataLocalService.borrarNoticia( this.noticia );
        }
      };
    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'star-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorito clicked');
          this.dataLocalService.guardarNoticia( this.noticia );
        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
      {
        text: 'Compartir',
        icon: 'share-social-outline',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      },
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancelar clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
