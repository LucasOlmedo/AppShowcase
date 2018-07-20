import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import {
  Component,
  ViewChild
} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { EventsPage } from '../pages/events/events';
import { SettingsPage } from '../pages/settings/settings';
import { ArticlesPage } from '../pages/articles/articles';

import { ConfigProvider } from '../providers/config/config';
import { ProfilePage } from '../pages/profile/profile';

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
      { title: 'Artigos', component: ArticlesPage },
      { title: 'Eventos', component: EventsPage },
      { title: 'Configurações', component: SettingsPage },
      { title: 'Sobre', component: AboutPage },
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

  profilePage() {  
    this.nav.setRoot(ProfilePage); 
  } 

  private initTheme() {
    this.config.getTheme()
      .subscribe(val => this.theme = val);
  }
}
