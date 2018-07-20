import {
  NgModule,
  ErrorHandler,
} from '@angular/core';
import {
  IonicApp,
  IonicModule,
  IonicErrorHandler,
} from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import {
  ArticlesPage,
  FilterArticleModal
} from '../pages/articles/articles';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { BiblePage } from '../pages/bible/bible';
import { EventsPage } from '../pages/events/events';
import { WorshipPage } from '../pages/worship/worship';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { ArticleDetailPage } from '../pages/article-detail/article-detail';

import { ConfigProvider } from '../providers/config/config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    BiblePage,
    EventsPage,
    WorshipPage,
    ProfilePage, 
    ArticlesPage,
    SettingsPage,
    EventDetailPage,
    ArticleDetailPage,
    FilterArticleModal,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    BiblePage,
    EventsPage,
    WorshipPage,
    ProfilePage,
    ArticlesPage,
    SettingsPage,
    EventDetailPage,
    ArticleDetailPage,
    FilterArticleModal,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ConfigProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})
export class AppModule { }
