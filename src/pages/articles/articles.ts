import {
  Component,
  ViewChild,
} from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import { ArticleDetailPage } from '../article-detail/article-detail';
import {
  FAKE_ARTICLES,
  ARTICLE_FILTER,
} from '../../constants/constants';
import {
  Content,
  IonicPage,
  NavParams,
  NavController,
  ViewController,
  ModalController,
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  @ViewChild(Content) content: Content;

  private articles: any;
  private activeTheme: any;
  private searchbar: boolean = false;

  constructor(
    private navParams: NavParams,
    private config: ConfigProvider,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
  ) {
    this.initArticles();
    this.config.getTheme()
      .subscribe(theme => this.activeTheme = theme);
  }

  private initArticles() {
    return this.articles = FAKE_ARTICLES;
  }

  articleDetails(article) {
    this.navCtrl.push(ArticleDetailPage, {
      article: article
    });
  }

  toogleSearch() {
    this.searchbar = !this.searchbar;
    if (!this.searchbar) {
      this.initArticles();
    }
    this.content.resize();
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

  filterArticles() {
    let modal = this.modalCtrl.create(FilterArticleModal, {
      filter: ARTICLE_FILTER,
      theme: this.activeTheme
    });
    modal.present();
  }
}

@Component({
  selector: 'filter-article-modal',
  templateUrl: 'filter-article-modal.html'
})
export class FilterArticleModal {

  private theme: any = '';
  private filter: any = {};

  constructor(
    private params: NavParams,
    private view: ViewController,
  ) {
    this.getParams();
  }

  private getParams() {
    this.theme = this.params.data.theme;
    this.filter = this.params.data.filter;
  }

  applyFilters() {
    this.view.dismiss();
  }

  dismiss() {
    this.view.dismiss();
  }
}
