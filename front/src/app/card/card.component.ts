import { Component, OnInit } from '@angular/core';
import { CardModel} from '../models/cardModel';
import { CardService } from './card.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as ru from 'convert-layout/ru';
import { Subscription } from 'rxjs';


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

  get prevLink():string{
    let prevInd=parseInt(this.getId())-1;
    if(prevInd<1){
      prevInd=this.cardsLength;
    }
    let newLink='/card/' + prevInd;
    return newLink;
  }

  get nextLink():string{
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

  public getId():string{
    return this.actvatedRoute.snapshot.paramMap.get('id');
  }

  private getCountWords(callback?):Subscription{
    return this.cardService.getCardsLength()
      .subscribe(
        (resp)=>{
          this.cardsLength= resp.count;
          if(callback){
            callback();
          }         
      });
  }

  public getWord():void{
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

  public addWord():void{
    this.card=new CardModel('','');
    this.isNewWord = true;
    this.isUpdate = false;
    this.disabledInput = false;
  }

  sendNewWord():void{
    this.cardService.postCardData(this.card)
      .subscribe((resp)=>{
        this.cardService.onlyHardly = false;
        let callback=()=>this.router.navigate([`/card/${this.cardsLength}`]);     
        this.getCountWords(callback);          
      });
  }

  public updateWord():void{
    this.isUpdate = true;
    this.isNewWord =false;
    this.disabledInput = false;
  }

  sendUpdate():void{
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

  setIsHardlly(e):void{
    this.card.isHardly= e;
    console.log(this.card);
    this.cardService.setHardly(this.card).subscribe((data)=>{
      console.log(data);
    })
  }

  public toggleShowRussian():void{
    this.cardService.showRussian=!this.cardService.showRussian;
  }

  public cancel():void{
    this.isUpdate=false;
    this.isNewWord=false;

    if(this.getId()=='0'){
      this.router.navigate(['card/1'])

    }
  }

  public filterWords(e):void{
    if(this.getId()=="1"){
      this.getWord();
    }
    else{
      this.router.navigate(['card/1']);
    }   
  }

  public layoutSwitcherToRu(e: string):void{
    this.card.russianWord= ru.fromEn(e);
  }

  public layoutSwitcherToEn(e: string):void{
    this.card.englishWord= ru.toEn(e);
  }
}
