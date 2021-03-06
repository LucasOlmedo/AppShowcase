import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs/Rx";
import { Injectable } from '@angular/core';

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
          this.setLogo(value);
          this.theme.next(value);
        } else {
          this.setLogo('light');
          this.storage.set('theme', 'light');
        }
      });
  }

  public setTheme(val) {
    this.storage.set('theme', val)
      .then(value => {
        this.setLogo(value);
        this.theme.next(value);
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
