import { Component, OnInit } from '@angular/core';
import { ListWordsService } from './list-words.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {
  listWords: any = [];
  onlyHardly: boolean;
  listShowWords:any = [];

  constructor(private listWordsService: ListWordsService) { }

  ngOnInit() {
    this.listWordsService.getWords().subscribe((d)=>{
      this.listWords = d;
      this.listShowWords = d;
    })
  }

  filterWords(e){    
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
