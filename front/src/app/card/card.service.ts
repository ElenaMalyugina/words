import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel } from "../models/cardModel";

@Injectable()
export class CardService{
    constructor(private http: HttpClient){ }

    public getCardData(id): Observable<CardModel> {
        return this.http.get<CardModel>('http://localhost:3000/card?id=1');
    }

    public postCardData(newWord){
        return this.http.post('http://localhost:3000/card', newWord);
    }

    public updateCardData(changeWord){
        return this.http.put('http://localhost:3000/card', changeWord);
    }

}