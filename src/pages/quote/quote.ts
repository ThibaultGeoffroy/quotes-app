import { Component } from '@angular/core';
import {IonicPage, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;
  constructor(private viewCtrl: ViewController, private navParams: NavParams) {
  }


  onClose(remove = false){
    this.viewCtrl.dismiss(remove);
  }
  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

}
