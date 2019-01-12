import { Component, OnInit } from '@angular/core';
import { CardModel, CardResponse } from '../models/cardModel';
import { CardService } from './card.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ru from 'convert-layout/ru';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card: CardModel = new CardModel('', '');
  cardsLength: number;
  disabledInput: boolean = true;
  isUpdate: boolean = false;
  isNewWord: boolean = false;
  
  constructor(private cardService: CardService, private actvatedRoute: ActivatedRoute, private router: Router){}

  get prevLink(){
    let prevInd=parseInt(this.getId())-1;
    if(prevInd<1){
      prevInd=this.cardsLength;
    }
    let newLink='/card/' + prevInd;
    return newLink;
  }

  get nextLink(){
    let nextInd=parseInt(this.getId())+1;
    if(nextInd> this.cardsLength){
      nextInd= 1;
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

  private getCountWords(){
    return this.cardService.getCardsLength()
      .subscribe(
        (resp)=>{
          this.cardsLength= resp.count;
      });
  }

  public getWord(){
    this.getCountWords();
    let i=this.getId();

    if(i!='0'){
      this.cardService.getCardData(i)
        .subscribe(
          (resp: CardModel)=>{
            this.card=resp;
          },
          (err)=>{
            console.log(err);
        }
      )
    }
    else{
      this.addWord();
    }
  }

  public addWord(){
    this.card=new CardModel('','');
    this.isNewWord = true;
    this.isUpdate = false;
    this.disabledInput = false;
  }

  sendNewWord(){
    this.cardService.postCardData(this.card)
      .subscribe((resp)=>{
        this.router.navigate([`/card/${this.cardsLength + 1}`]);
       
      });
  }

  public updateWord(){
    this.isUpdate = true;
    this.isNewWord =false;
    this.disabledInput = false;
  }

  sendUpdate(){
    this.cardService.updateCardData(this.card)
      .subscribe(
        (resp)=>{
          this.getWord();  
          this.isUpdate= false;
          this.disabledInput = true;
        },
        (err)=>console.log(err)
    )
  }

  public toggleShowRussian(){
    this.cardService.showRussian=!this.cardService.showRussian;
  }

  public cancel(){
    this.isUpdate=false;
    this.isNewWord=false;

    if(this.getId()=='0'){
      this.router.navigate(['card/1'])

    }
  }

  public layoutSwitcherToRu(e: string){
    this.card.russianWord= ru.fromEn(e);
  }

  public layoutSwitcherToEn(e: string){
    this.card.englishWord= ru.toEn(e);
  }
}
