import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  theme: String;
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any }>;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private config: ConfigProvider,
    private splashScreen: SplashScreen,
  ) {
    this.initializeApp();

    this.pages = [
      { title: 'Página inicial', component: HomePage },
      { title: 'Configurações', component: SettingsPage },
    ];

  }

  initializeApp() {
    this.initTheme();
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  private initTheme() {
    this.config.getTheme()
      .subscribe(val => this.theme = val);
  }
}
