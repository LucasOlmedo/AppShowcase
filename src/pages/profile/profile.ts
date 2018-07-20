import {
  IonicPage,
  NavParams,
  NavController,
} from 'ionic-angular';
import { Component } from '@angular/core';
import { USER } from '../../constants/constants';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  user: any;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
  ) {
    this.user = USER;
  }

}
