import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel, CardResponse } from "../models/cardModel";

@Injectable()
export class CardService{
    showRussian: boolean;

    constructor(private http: HttpClient){ }

    public getCardsLength():Observable<{count: number}>{
        return this.http.get<{count: number}>('http://localhost:3000/card/count');
    }
    
    public getCardData(id): Observable<CardModel> {
        return this.http.get<CardModel>('http://localhost:3000/card?id='+`${id}`);
    }

    public postCardData(newWord){
        return this.http.post('http://localhost:3000/card', newWord);
    }

    public updateCardData(changeWord){
        return this.http.put('http://localhost:3000/card', changeWord);
    }

}