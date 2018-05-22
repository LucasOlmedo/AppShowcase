import { Component } from '@angular/core';
import { APP_LOGO } from '../../constants/constants';
import { ConfigProvider } from '../../providers/config/config';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  appLogo: String = APP_LOGO;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private config: ConfigProvider,
  ) {
    this.config.getLogo()
      .subscribe(value => this.appLogo = value);
  }

  private linkFacebook() {
    window.open('https://www.facebook.com/NaContramaoOficial/', '_blank');
  }

  private linkInstagram() {
    window.open('https://www.instagram.com/nacontramaooficial/', '_blank');
  }

  private linkYoutube() {
    window.open('https://www.youtube.com/', '_blank');
  }

}
