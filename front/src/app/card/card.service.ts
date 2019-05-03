import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { CardModel, CardResponse } from "../models/cardModel";
import { URLS } from "src/const/urls.const";

@Injectable()
export class CardService{
    public showRussian: boolean;
    public onlyHardly: boolean;

    constructor(private http: HttpClient){ }

    public getCardsLength():Observable<{count: number}>{
        return this.http.get<{count: number}>(`${URLS.api}card/count?onlyHardly=${this.onlyHardly}`);
    }
    
    public getCardData(id): Observable<CardModel> {
        return this.http.get<CardModel>(`${URLS.api}card?id=${id}&onlyHardly=${this.onlyHardly}`);
    }

    public postCardData(newWord){
        return this.http.post(`${URLS.api}card`, newWord);
    }

    public updateCardData(changeWord){
        return this.http.put(`${URLS.api}card`, changeWord);
    }

    public setHardly(card){
        return this.http.put(`${URLS.api}card/setHardly`, card );
    }
}