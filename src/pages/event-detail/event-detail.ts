import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {

  event: any;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
  ) {
    this.event = this.navParams.get('event');
  }

}
