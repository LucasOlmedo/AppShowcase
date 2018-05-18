import { Component } from '@angular/core';
import { BiblePage } from '../bible/bible';
import { AboutPage } from '../about/about';
import { NavController } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { WorshipPage } from '../worship/worship';
import { SettingsPage } from '../settings/settings';
import { ArticlesPage } from '../articles/articles';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
