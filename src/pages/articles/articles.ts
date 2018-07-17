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
    this.initArticles();
  }

  initArticles() {
    return this.articles = FAKE_ARTICLES;
  }

  articleDetails(article) {
    this.navCtrl.push(ArticleDetailPage, {
      article: article
    });
  }

  searchArticles($event: any) {
    this.initArticles();
    let query = $event.target.value;

    if (query && query.trim() != '') {
      this.articles = this.articles.filter((item) => {
        return (item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
      })
    }
  }

}
