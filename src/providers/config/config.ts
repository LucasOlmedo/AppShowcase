import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs/Rx";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigProvider {

  private theme: BehaviorSubject<String> = new BehaviorSubject('light');

  constructor(
    private storage: Storage
  ) {
    this.initTheme();
  }

  private initTheme() {
    this.storage.get('theme')
      .then(value => {
        value != null
          ? this.theme.next(value)
          : this.storage.set('theme', 'light');
      });
  }

  public setTheme(val) {
    this.storage.set('theme', val)
      .then(value => this.theme.next(value));
  }

  public getTheme() {
    return this.theme.asObservable();
  }

}
