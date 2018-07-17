import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { BiblePage } from '../pages/bible/bible';
import { EventsPage } from '../pages/events/events';
import { WorshipPage } from '../pages/worship/worship';
import { SettingsPage } from '../pages/settings/settings';
import { ArticlesPage, FilterArticleModal } from '../pages/articles/articles';

import { ConfigProvider } from '../providers/config/config';
import { ArticleDetailPage } from '../pages/article-detail/article-detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    BiblePage,
    EventsPage,
    WorshipPage,
    ArticlesPage,
    SettingsPage,
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
    ArticlesPage,
    SettingsPage,
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
