import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConfigProvider } from '../../providers/config/config';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  theme: String;

  constructor(
    private navParams: NavParams,
    private toastView: ToastController,
    private config: ConfigProvider,
    private navCtrl: NavController,
  ) {
    this.config.getTheme()
      .subscribe(val => this.theme = val);
  }

  public changeTheme(theme) {
    this.config.setTheme(theme);
    let toast = this.toastView.create({
      message: 'Tema alterado!',
      duration: 1500,
      position: 'bottom'
    });
    toast.present();
  }

}
