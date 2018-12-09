import { Component, OnInit } from '@angular/core';
import { CardModel, CardResponse } from '../models/cardModel';
import { CardService } from './card.service';
import { ActivatedRoute, Router } from '@angular/router';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  card: CardModel;
  cardsLength: number;
  
  constructor(private cardService: CardService, private actvatedRoute: ActivatedRoute){}

  get prevLink(){
    let prevInd=parseInt(this.getId())-1;
    if((prevInd)<1){
      prevInd=1;
    }
    let newLink='/card/' + prevInd;
    return newLink;
  }

  get nextLink(){
    let nextInd=parseInt(this.getId())+1;
    if(nextInd> this.cardsLength){
      nextInd=this.cardsLength;
    }

    let newLink='/card/' + nextInd;
    return newLink;
  }

  ngOnInit() {
    this.getWord();    
  }

  public getId(){
    return this.actvatedRoute.snapshot.paramMap.get('id');
  }

  public getWord(){
    let i=this.getId();
    this.cardService.getCardData(i)
      .subscribe(
        (resp: CardResponse)=>{
          console.log(resp);
          //debugger;
          this.cardsLength=resp.count;
          this.card=resp.card;
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
