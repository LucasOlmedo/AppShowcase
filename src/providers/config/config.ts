import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigProvider {

  private theme: BehaviorSubject<String> = new BehaviorSubject('light');
  private appLogo: BehaviorSubject<String> = new BehaviorSubject('assets/imgs/logo_full.png');

  constructor(
    private storage: Storage
  ) {
    this.initTheme();
  }

  private initTheme() {
    this.storage.get('theme')
      .then(value => {
        if (value != null) {
          this.theme.next(value);
          this.setLogo(value);
        } else {
          this.storage.set('theme', 'light');
          this.setLogo('light');
        }
      });
  }

  public setTheme(val) {
    this.storage.set('theme', val)
      .then(value => {
          this.theme.next(value);
          this.setLogo(value);
      });
  }

  private setLogo(theme) {
    if (theme == 'light') {
      this.appLogo.next('assets/imgs/logo_full.png');
    } else {
      this.appLogo.next('assets/imgs/logo_full_white.png');
    }
  }

  public getLogo() {
    return this.appLogo.asObservable();
  }

  public getTheme() {
    return this.theme.asObservable();
  }

}
