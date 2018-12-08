import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/cardModel';
import { CardService } from './card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card: CardModel;

  constructor(private cardService: CardService, private actvatedRoute: ActivatedRoute){

  }

  ngOnInit() {
    this.getWord();    
  }

  private getId(){
    return this.actvatedRoute.snapshot.paramMap.get('id');
  }

  public getWord(){
    let i=this.getId();
    this.cardService.getCardData(i)
      .subscribe(
        (resp: CardModel)=>{
          console.log(resp);
          //debugger;
          this.card=resp;
          if(!this.card.id){
            this.card.id = i;
          }
        },
        (err)=>{
          console.log(err);
      }
    )
  }

  public updateWord(){
    this.cardService.updateCardData(this.card)
      .subscribe(
        (resp)=>{
          console.log(resp);
        },
        (err)=>console.log(err)
    )

  }




}
