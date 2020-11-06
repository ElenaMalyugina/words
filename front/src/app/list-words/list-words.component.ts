import { Component, OnInit } from '@angular/core';
import { CardModel } from '../models/cardModel';
import { ListWordsService } from './list-words.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {
  listWords: CardModel[] = [];
  onlyHardly: boolean;
  listShowWords:CardModel[] = [];

  constructor(private listWordsService: ListWordsService) { }

  ngOnInit() {
    this.listWordsService.getWords().subscribe((words)=>{
      this.listWords = words;
      this.listShowWords = words;
    })
  }

  public filterWords(e):void{    
    if(e){ 
      this.listShowWords = this.listWords.filter(el=> {
        return el.isHardly === true;
      });      
    }
    else{
      this.listShowWords = this.listWords;
    }
  }

}
