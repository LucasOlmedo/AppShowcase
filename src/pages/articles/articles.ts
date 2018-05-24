import { Component } from '@angular/core';
import { FAKE_ARTICLES } from '../../constants/constants';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticleDetailPage } from '../article-detail/article-detail';

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

  articleDetails(article) {
    this.navCtrl.push(ArticleDetailPage, {
      article: article
    });
  }

}
