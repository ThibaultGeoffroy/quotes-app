import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Quote} from "../data/quote.interface";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class QuotesListService {

  private quotes: {
  category: string,
  quotes: Quote[],
  icon: string
}[] = [];


  constructor(private httpClient: HttpClient) {
  }


  getQuotes(){
   return this.quotes;
  }
  fetchList() {
    const context = this;
    console.log("truc");
    return this.httpClient.get<{
      result:{
        category: string,
        quotes: Quote[],
        icon: string
      }[]
    }
      >("http://demo1098717.mockable.io/quotes").do((quotes) => {
      context.quotes = quotes.result;
      console.log("success");
      return quotes;
    });
  }
}
