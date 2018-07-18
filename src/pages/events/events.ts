import {
  Component,
  ViewChild
} from '@angular/core';
import {
  Content,
  IonicPage,
  NavParams,
  NavController,
} from 'ionic-angular';
import { FAKE_EVENTS } from '../../constants/constants';
import { EventDetailPage } from '../event-detail/event-detail';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  @ViewChild(Content) content: Content;

  private events: any;
  private searchbar: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.initEvents();
  }

  private initEvents() {
    return this.events = FAKE_EVENTS;
  }

  eventDetails(event) {
    this.navCtrl.push(EventDetailPage, {
      event: event
    });
  }

  toogleSearch() {
    this.searchbar = !this.searchbar;
    if (!this.searchbar) {
      this.initEvents();
    }
    this.content.resize();
  }

  searchEvents($event: any) {
    this.initEvents();
    let query = $event.target.value;

    if (query && query.trim() != '') {
      this.events = this.events.filter((item) => {
        return (item.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
      })
    }
  }
}
