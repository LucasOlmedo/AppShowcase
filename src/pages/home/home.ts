import { Component } from '@angular/core';
import { BiblePage } from '../bible/bible';
import { AboutPage } from '../about/about';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { WorshipPage } from '../worship/worship';
import { SettingsPage } from '../settings/settings';
import { ArticlesPage } from '../articles/articles';
import { APP_LOGO } from '../../constants/constants';
import { ConfigProvider } from '../../providers/config/config';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  appLogo: String = APP_LOGO;

  constructor(
    private navCtrl: NavController,
    private config: ConfigProvider,
  ) {
    this.config.getLogo()
      .subscribe(value => this.appLogo = value);
  }

  settingsPage() {
    this.navCtrl.setRoot(SettingsPage);
  }

  articlesPage() {
    this.navCtrl.setRoot(ArticlesPage);
  }

  eventsPage() {
    this.navCtrl.setRoot(EventsPage);
  }

  biblePage() {
    this.navCtrl.setRoot(BiblePage);
  }

  worshipPage() {
    this.navCtrl.setRoot(WorshipPage);
  }

  aboutPage() {
    this.navCtrl.setRoot(AboutPage);
  }

}
