import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-bible',
  templateUrl: 'bible.html',
})
export class BiblePage {

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
  ) {
  }
}
