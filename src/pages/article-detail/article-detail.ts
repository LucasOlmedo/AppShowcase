import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article-detail',
  templateUrl: 'article-detail.html',
})
export class ArticleDetailPage {

  article: any;

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
  ) {
    this.article = this.navParams.get('article');
  }
}
