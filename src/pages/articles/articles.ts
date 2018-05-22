import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FAKE_ARTICLES } from '../../constants/constants';

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  private articles: any;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.articles = FAKE_ARTICLES;
  }

}
