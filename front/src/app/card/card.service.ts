import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel, CardResponse } from "../models/cardModel";

@Injectable()
export class CardService{
    constructor(private http: HttpClient){ }

    public getCardData(id): Observable<CardResponse> {
        return this.http.get<CardResponse>('http://localhost:3000/card?id='+`${id}`);
    }

    public postCardData(newWord){
        return this.http.post('http://localhost:3000/card', newWord);
    }

    public updateCardData(changeWord){
        return this.http.put('http://localhost:3000/card', changeWord);
    }

}