import {Component} from '@angular/core';
import {AlertController, IonicPage, NavParams} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesServices} from "../../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {


  category: string;
  quotes: Quote[];
  icon: string;

  constructor(private navParams: NavParams,
              private alertCtrl: AlertController,
              private quoteService: QuotesServices) {
  }

  ionViewWillLoad() {
    this.category = this.navParams.data.category;
    this.quotes = this.navParams.data.quotes;
    this.icon = this.navParams.data.icon;  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure ?',
      message: "Are you sure you want to add the quote",
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {
        }
      },{
        text: 'Yes go ahead',
        handler: () => {
          this.quoteService.addQuoteToFavorite(selectedQuote);
        }
      }]
    })

    alert.present();

  }

  onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote){
    return this.quoteService.isQuoteFavorite(quote);
  }
}
