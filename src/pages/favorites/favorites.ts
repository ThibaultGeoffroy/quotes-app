import { Component } from '@angular/core';
import {IonicPage, ModalController} from 'ionic-angular';
import {Quote} from "../../data/quote.interface";
import {QuotesServices} from "../../services/quotes";
import {QuotePage} from "../quote/quote";

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  constructor(private quoteService: QuotesServices, private modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavorites();
  }


  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((isRemoved: boolean) => {
      if(isRemoved){
        this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavorites();
      }
    });
  }
}
